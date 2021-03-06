export default class FeedService {

    constructor() {
        // Might cause some slow fetching, but useful against CORS troubles
        this.proxyURL = `https://cors-anywhere.herokuapp.com/`;
    }

    fetchRSS(callBack) {
        const feedList = require('./rssfeeds.json');

        try {
            Promise.all(feedList.rss_feeds.map((feed) =>
                fetch(this.proxyURL + feed.url)
                    .then(response => response.text())
                    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            )).then(data => {
                // We have here and array of feeds and their items
                const arrItemsByFeed = data.map( (feed, i) => {
                    console.log(feed);
                    return this.getItemChildNodes(feed, feedList.rss_feeds[i].media_tag);
                });
                const feedsTitles = data.map( feed => feed.getElementsByTagName("title")[0].innerHTML );
                // We need to flaten all that to filter by date
                const sortedItems = arrItemsByFeed.flat().sort( (a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                callBack(sortedItems, feedsTitles);
            })
        } catch (error) {
            console.error(error);
        }
    }

    getItemChildNodes(RSSData, mediaTag) {
        var filteredItem = [];
        var items = RSSData.getElementsByTagName("item");
        var feedTitle = RSSData.getElementsByTagName("title")[0].innerHTML;

        // Retrieve all tag names of this DOM Node
        var parentTags = this.getTags(items[0]);

        // Run through all retrieved items
        filteredItem = [...items].map( item => {
            var itemObject = {
                "feeder": feedTitle,
                "media": item.getElementsByTagName(mediaTag)[0].getAttribute("url")
            };
            parentTags.map( tag => {
                var currentItem = item.getElementsByTagName(tag)[0];

                // Protect from empty tag text content
                if (currentItem) {
                    itemObject[tag] = currentItem.textContent;
                }
            });
            return itemObject;
        });

        return filteredItem;
    }

    getTags(node) {
        var tags = node.getElementsByTagName('*');
        tags = [...tags].map(tag => {
            return tag.tagName;
        });
        return tags;
    }


}

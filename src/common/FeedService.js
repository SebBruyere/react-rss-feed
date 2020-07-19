export default class FeedService {

    constructor() {
        this.RSSFeedTest = `https://www.lemonde.fr/rss/une.xml`;
        this.APIKey = `xe3tuhc9olqsuhvn9fc8fzgtmrgdjcqnl514pxqz`;
        this.baseURL = `https://api.rss2json.com/v1/api.json?rss_url=`;
        this.proxyURL = `https://cors-anywhere.herokuapp.com/`;
    }

    fetchRSS(callBack) {
        fetch(this.proxyURL + this.RSSFeedTest)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => callBack( this.getItemChildNodes(data) ));
    }

    getItemChildNodes(RSSData) {

        console.log(RSSData);

        var filteredItem = [];
        var items = RSSData.getElementsByTagName("item");

        // Retrieve all tag names of this DOM Node
        var parentTags = this.getTags(items[0]);

        // Run through all retrieved items
        filteredItem = [...items].map( item => {
            var itemObject = {};
            parentTags.map( tag => {
                var currentItem = item.getElementsByTagName(tag)[0];

                // Protect from empty tag text content
                if (currentItem) {
                    if (currentItem.childElementCount) {
                        if (currentItem.hasAttribute("url")) {
                            if (currentItem.prefix) {
                                itemObject[currentItem.prefix] = currentItem.getAttribute("url");
                            } else {
                                itemObject[tag] = currentItem.getAttribute("url");
                            }
                        }
                    } else {
                        itemObject[tag] = currentItem.textContent;
                    }
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

import axios from "axios";

export default class FeedService {

    constructor() {
        this.RSSFeedTest = `https://www.lemonde.fr/rss/une.xml`;
        this.APIKey = `xe3tuhc9olqsuhvn9fc8fzgtmrgdjcqnl514pxqz`;
        this.baseURL = `https://api.rss2json.com/v1/api.json?rss_url=`;
    }

    fetchRSS(callBack) {
        axios.get(`${this.baseURL}${this.RSSFeedTest}&api_key=${this.APIKey}`)
            .then(res => {
                callBack(res.data.items);
            });
    }


}

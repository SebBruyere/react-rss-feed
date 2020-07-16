import React from "react";
import FeedService from "./../../common/FeedService";

const feedService = new FeedService();

export default class Sidebar extends React.Component {

    constructor () {
        super ();

        this.RSSFeed = `https://www.lemonde.fr/rss/une.xml`;
        this.RSSData = "";
    }

    componentDidMount () {
        feedService.fetchRSS(result => {
            this.setRSSData = result;
        });
    }

    render () {

        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

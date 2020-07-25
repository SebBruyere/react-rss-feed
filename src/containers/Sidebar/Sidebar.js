import React from "react";

export default class Sidebar extends React.Component {
    render () {

        let feedsTitles = this.props.feedsTitles;
        let items = [];

        if (feedsTitles.length) {
            items = feedsTitles.map((oneFeed, i) => (
                <div key={i} className="mt-4 mb-4">
                    <a>{oneFeed}</a>
                </div>
            ));
        }

        return (
            <div>
                <h1>Rss Feed</h1>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}

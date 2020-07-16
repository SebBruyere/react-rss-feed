import React from "react";
import Item from "./../../components/Item";

export default class Feed extends React.Component {

    render () {

        let rssItems = this.props.rssItems;
        let items = [];

        if (rssItems.length) {
            items = rssItems.map((oneItem, i) => (
                <div key={i} className="row">
                    <div className="mt-2 mb-2 col-xs-12">
                        <Item item={oneItem} />
                    </div>
                </div>
            ));
        }

        return (
            <div className="container-fluid">
                {items}
            </div>
        );
    }
}

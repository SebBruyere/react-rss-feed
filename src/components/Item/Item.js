import React from "react";
import './Item.css';

function Item (props) {
    return (
        <div>
            <a href={props.item.link} target="_blank" className="wrapper-item mb-5">
                <img src={props.item.media} rel="Item Image" />
                <h4 className="mt-2 mb-3">{props.item.title}</h4>
                <p>{props.item.description}</p>
            </a>
            <div className="item-footer d-flex justify-content-between">
                <span>{props.item.pubDate}</span>
                <span><i>{props.item.feeder}</i></span>
            </div>
        </div>

    );
}

export default Item;

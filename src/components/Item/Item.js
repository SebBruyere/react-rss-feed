import React from "react";
import './Item.css';

function Item (props) {
    return (
        <a href={props.item.link} target="_blank" className="wrapper-item mb-5">
            <img src={props.item.enclosure.link} rel="Item Image" />
            <h4 className="mt-2 mb-3">{props.item.title}</h4>
            <p>{props.item.description}</p>
            {console.log(props.item)}
        </a>
    );
}

export default Item;

import React from "react";

import "./index.css";

export default props => {

    let styleClass = props.style || ""

    return (
        <button
            className={`button ${styleClass}`}
            onClick={ e => props.handlerClick(e.target.value)}
            value={props.label || props.value}
        >
            {props.label}
        </button>
    )
}
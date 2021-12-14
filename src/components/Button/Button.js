import React from "react";
import './Button.css';


function Button (props) {
    console.log(props)
    return (
        <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
        disabled={props.onDisabled}
        >{props.nameOfButton}
        </button>
    )
}

export default Button

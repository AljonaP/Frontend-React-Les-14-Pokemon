import React from "react";
import axios from "axios";


function Button (props) {
    console.log(props)
    return (
        <button
        type={props.type}
        onClick={props.onClick}
        disabled={props.onDisabled}
        >{props.nameOfButton}
        </button>
    )


}

export default Button

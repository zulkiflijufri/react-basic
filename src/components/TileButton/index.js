import React from "react";
import { string, func } from "prop-types";

export default function TileButton({ color, onClick }) {
    const buttonSytles = {
        backgroundColor: color,
        display: "inline-block",
        width: 20,
        height: 20,
        cursor: "pointer",
        border: "1px solid black",
    };

    return <div style={buttonSytles} onClick={onClick}></div>;
}

TileButton.prototype = {
    color: string.isRequired,
    onClick: func.isRequired,
};

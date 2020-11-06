import React from "react";
import { string, number, func } from "prop-types";
import "./style.css";

function Tile({ id, color, onDoubleClick }) {
    return (
        <div
            className="tile"
            style={{ backgroundColor: color }}
            onDoubleClick={onDoubleClick}
        ></div>
    );
}

Tile.defaultProps = {
    color: "gray",
};

Tile.prototype = {
    id: number.isRequired,
    color: string,
    onDoubleClick: func.isRequired,
};

export default Tile;

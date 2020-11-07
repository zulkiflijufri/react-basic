import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTileWithChecking, removeTile } from "../../features/Grid/action";
import Tile from "../Tile";
import TileButton from "../TileButton";

export default function Grid() {
    const colors = ["red", "blue", "pink", "yellow", "gray"];

    let gridTiles = useSelector((state) => state.grid);
    let dispatch = useDispatch();

    return (
        <div>
            <div style={{ maxWidth: 400, overflow: "hidden" }}>
                {gridTiles.map((title, index) => {
                    return (
                        <Tile
                            {...title}
                            key={index}
                            onDoubleClick={(_) =>
                                dispatch(removeTile(title.id))
                            }
                        />
                    );
                })}
            </div>

            <div>
                {colors.map((color) => {
                    return (
                        <TileButton
                            key={color}
                            color={color}
                            onClick={(_) =>
                                dispatch(addTileWithChecking(color))
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

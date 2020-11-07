import { ADD_TILE, REMOVE_TILE } from "./constans";

export function addTile(color) {
    return {
        type: ADD_TILE,
        color,
        date: Date.now(),
    };
}

export function removeTile(id) {
    return {
        type: REMOVE_TILE,
        id,
    };
}

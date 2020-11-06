const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TILE":
            const newId = state.length + 1;
            const newTile = {
                id: newId,
                color: action.color,
            };
            return [...state, newTile];
        case "REMOVE_TILE":
            return state.filter((tile) => tile.id !== action.id);
        default:
            return state;
    }
}

export default reducer;

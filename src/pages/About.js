import React from "react";

const countReducer = function (state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

function About() {
    const [counter, dispatch] = React.useReducer(countReducer, 0);
    return (
        <div>
            <h2>About Page</h2>
            <p>Example hook useReducer</p>
            <div>
                <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
                    -
                </button>
                {counter}
                <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
                    +
                </button>
            </div>
        </div>
    );
}

export default About;

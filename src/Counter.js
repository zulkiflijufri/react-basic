import React, { useState } from "react";

function Counter() {
    // let count = 0;
    // function increment() {
    //     count++;
    //     console.log(count);
    // }

    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Counter App</h3>
            <h4>Value counter now: {count}</h4>
            {count != 0 && (
                <button
                    style={{ margin: "5px" }}
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
            )}

            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter;

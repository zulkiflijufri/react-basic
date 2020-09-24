import React from "react";

const Button = ({ callAlert, caption }) => {
    return (
        <button style={{ border: "green solid 2px" }} onClick={callAlert}>
            {caption}
        </button>
    );
};

export default Button;

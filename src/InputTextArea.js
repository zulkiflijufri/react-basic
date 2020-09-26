import React from "react";

function InputTextArea({ label, value, onChange }) {
    return (
        <div>
            <label htmlFor={label}>
                {label}
                <textarea
                    cols="10"
                    rows="2"
                    value={value}
                    onChange={onChange}
                ></textarea>
            </label>
        </div>
    );
}

export default InputTextArea;

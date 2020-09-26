import React from "react";

function InputRadio({ label, checked, onChange }) {
    return (
        <div>
            <label htmlFor={label}>
                {label}
                <input type="radio" checked={checked} onChange={onChange} />
            </label>
        </div>
    );
}

export default InputRadio;

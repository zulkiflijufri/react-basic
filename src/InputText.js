import React from "react";

function InputText({ label, value, onChange }) {
    return (
        <div>
            <label htmlFor="name">
                {label} <input type="text" value={value} onChange={onChange} />
            </label>
        </div>
    );
}

export default InputText;

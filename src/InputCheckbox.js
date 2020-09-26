import React from "react";

function InputCheckbox({ label, value, onChange }) {
    return (
        <div>
            <label htmlFor="member">
                {label}
                <input type="checkbox" value={value} onChange={onChange} />
            </label>
        </div>
    );
}

export default InputCheckbox;

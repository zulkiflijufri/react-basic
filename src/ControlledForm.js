import React, { useState } from "react";
import InputCheckbox from "./InputCheckbox";
import InputRadio from "./InputRadio";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

function ControlledForm() {
    const [name, setName] = useState("");
    const [member, setMember] = useState(false);
    const [gender, setGender] = useState(0);
    const [comment, setComment] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = { name, member, gender, comment, category };
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputText
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>
                <InputCheckbox
                    label="Member"
                    value={member}
                    onChange={(e) => setMember(e.target.checked)}
                />
            </div>
            <div>
                <InputRadio
                    label="Male"
                    checked={gender === 0}
                    onChange={() => setGender(0)}
                />
                <InputRadio
                    label="Female"
                    checked={gender === 1}
                    onChange={() => setGender(1)}
                />
            </div>
            <div>
                <InputTextArea
                    label="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="food">Food</option>
                    <option value="drink">Drink</option>
                </select>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ControlledForm;

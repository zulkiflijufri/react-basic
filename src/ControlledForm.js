import React, { useState } from "react";

function ControlledForm() {
    const [name, setName] = useState("");
    const [member, setMember] = useState(false);
    const [gender, setGender] = useState(0);
    const [comment, setComment] = useState("");
    const [category, setCategory] = useState("food");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = { name, member, gender, comment, category };
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="member">
                    Member:
                    <input
                        type="checkbox"
                        checked={member}
                        onChange={(e) => setMember(e.target.checked)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="gender">
                    Gender:
                    <input
                        type="radio"
                        checked={gender === 0}
                        onChange={() => setGender(0)}
                    />
                    Male
                    <input
                        type="radio"
                        checked={gender === 1}
                        onChange={() => setGender(1)}
                    />
                    Female
                </label>
            </div>
            <div>
                <label htmlFor="comment">
                    Comment:
                    <textarea
                        cols="10"
                        rows="2"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </label>
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

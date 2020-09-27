import React from "react";
import InputText from "./InputText";

function FormBasicValidation() {
    // const [name, setName] = React.useState("");
    // const [error, setError] = React.useState(`Field minimal 3 karakter`);

    // function handleName(e) {
    //     setError("");
    //     const value = e.target.value;
    //     if (value.length < 3) {
    //         setError(`Field minimal 3 karakter`);
    //     }
    //     setName(value);
    // }

    // state with object
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        phone: "",
    });

    const [error, setError] = React.useState({
        name: "name minimal 3 karakter",
        email: "email minimal 3 karakter",
        phone: "phone minimal 3 karakter",
    });

    const handleChange = (field, e) => {
        setError("");
        const value = e.target.value;
        if (value.length < 3) {
            setError({ ...error, [field]: `${field} minimal 3 karakter` });
        } else {
            setError({ ...error, [field]: "" });
        }

        setForm({ ...form, [field]: value });
    };

    function handleSubmit(e) {
        // if (error) {
        //     alert(error);
        // } else {
        //     alert(name);
        //
        e.preventDefault();
        if (error.name) {
            alert(error.name);
        } else if (error.email) {
            alert(error.email);
        } else if (error.phone) {
            alert(error.phone);
        } else {
            alert("Validasi success");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error.name}
                <InputText
                    label="Name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e)}
                />
                {error.email}
                <InputText
                    label="Email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e)}
                />
                {error.phone}
                <InputText
                    label="Phone"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FormBasicValidation;

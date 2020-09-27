import React from "react";
import InputText from "./InputText";

function MultipleForm() {
    // const [name, setName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [phone, setPhone] = React.useState("");

    // merge state with object
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        phone: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name, email, phone);

        alert(JSON.stringify(form));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputText
                    label="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <InputText
                    label="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />
                <InputText
                    label="Phone"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                    }
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default MultipleForm;

import React, { useRef } from "react";

function UncontrolledForm() {
    const inputName = useRef(null);
    const inputFile = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // send data form  el input name
        alert(inputName.current.value + " " + inputFile.current.files[0].name);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name{" "}
                    <input type="text" ref={inputName} defaultValue="Zul" />
                </label>
            </div>
            <div>
                <label htmlFor="photo">
                    Foto <input type="file" ref={inputFile} />
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default UncontrolledForm;

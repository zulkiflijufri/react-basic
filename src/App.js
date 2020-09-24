import React from "react";
import "./App.css";
import Button from "./Button";

function App() {
    function info() {
        alert("Lorem ipsum");
    }
    return (
        <div className="App">
            <header className="App-header">
                <Button callAlert={info} caption="Clicked me" />
            </header>
        </div>
    );
}

export default App;

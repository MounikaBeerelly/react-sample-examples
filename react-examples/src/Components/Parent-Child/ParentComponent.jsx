import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {

    const [message, setMessage] = useState("Hello from Parent..")

    const updateMessage = () => {
        setMessage("Message updated by parent..")
    }

    return (
        <div style={{ border : '2px solid red', padding : "2px"}}>
            <h2> Parent Component </h2>
            <p>Message: {message}</p>

            <ChildComponent message = {message} onUpdate={updateMessage} />
        </div>
    );
}

export default ParentComponent;
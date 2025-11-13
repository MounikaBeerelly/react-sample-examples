import React from "react";

const ChildComponent = ({message, onUpdate}) => {

    return (
        <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
            <h2>Child Component</h2>
            <p>Received from parent: {message}</p>

            <button onClick={onUpdate}>Update Parent Message</button>
        </div>
    );
}

export default ChildComponent;
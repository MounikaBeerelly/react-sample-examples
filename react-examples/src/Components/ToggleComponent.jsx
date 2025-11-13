import React, { useState } from "react";

const Togglecomponent = () => {

    const [show, setShow] = useState(false);

    const handleButton = (show) => {
        setShow (show => !show);
    }

    return (
        <div>
            <h2 style = {{ textAlign : 'center'}}>Toggle Component</h2>
            <p>Status : {show ? "Heads" : "Tails"}</p>
            <button onClick = {handleButton}>Toggle Button</button>
            <br />
            {/* <button onClick = {() => setShow(!show)}>{show ? 'ON' : 'OFF'}</button> */}
        </div>
    )
}

export default Togglecomponent;
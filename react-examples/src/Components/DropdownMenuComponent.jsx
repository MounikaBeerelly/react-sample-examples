import React, { useState } from "react";

const DropdownMenuComponent = ({data}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Dropdown Menu Component...</h2>
            <button onClick = {() => setOpen(!open)}>Menu</button>
            {open && (
                <ul>
                {data?.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            )}
        </div>
    );
}

const FetchData = () => {
        const items = ["Home", "Contact", "About", "Settings"];
    return (
        <DropdownMenuComponent data = {items} />
    );
}

export default FetchData;
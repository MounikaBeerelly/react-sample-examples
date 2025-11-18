import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const AddUserComponent = () => {

    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name : "",
        email : ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addUser(form));
        setForm({name: "", email: ""});
    };

    return (
        <div>
            <h2>Add User</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="enter name.."
                    value={form.name}
                    onChange={handleChange}
                    />
                <input 
                    type="email"
                    name="email"
                    placeholder="Enter email..."
                    value={form.email}
                    onChange={handleChange}
                    />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUserComponent;
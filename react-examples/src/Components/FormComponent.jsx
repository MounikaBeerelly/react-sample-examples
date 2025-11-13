import React, { useState } from "react";

const FormComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = () => {
        if(!email.includes('@')) {
            return setError('Invalid Email');
        } else {
            setError('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    }

    return (
        <div>
            <h1 style = {{ textAlign : 'center'}}>Form Component</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = "text"
                    value = {name}
                    placeholder = "Enter your name.."
                    onChange = {(e) => setName(e.target.value)} />
                <input 
                    type = "email"
                    value = {email}
                    placeholder = "Enter your email"
                    onChange = {(e) => setEmail(e.target.value)}
                    onBlur = {validateEmail} 
                />
                <button type="submit">Submit</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default FormComponent;
import React from "react";
import {Formik, Form} from 'formik';
import InputField from "./InputField";

const FormComponent = () => {

    const initialValues = {
        name : "",
        email : "",
        age : ""
    };

    const validate = (values) => {
        const errors = {};

        if(!values.name.trim()) {
            errors.name = "Name is required"
        }

        if(!values.email) {
            errors.email = "Email is required"
        } else if(!values.email.includes("@")) {
            errors.email = "Invalid email address";
        }

        if(!values.age) {
            errors.age = "Age is required"
        } else if(Number(values.age) < 18) {
            errors.age = "Age must be 18+";
        }

        return errors;
    };

    const handleSubmit = (values) => {
        console.log("Submitted", values);
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Formik Form</h2>

            <Formik 
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                <Form>
                    <InputField label = "Name" name = "name" />
                    <InputField label = "Email" name = "email" type="email" />
                    <InputField label = "Age" name = "age" type="number" />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white p-2 rounded mt-4"
                    >
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormComponent;
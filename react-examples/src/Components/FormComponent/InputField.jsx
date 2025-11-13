import React from "react";
import { Field, ErrorMessage} from 'formik';

const InputField = ({label, name, type="text", ...rest}) => {

    return (
        <div className="mb-4">
            <label htmlFor={name} className="font-semibold">
                {label}
            </label>

            <Field 
                id = {name}
                name = {name}
                type = {type}
                className = "block w-full p-2 border rounded mt-1"
                {...rest}
            />

            <ErrorMessage 
                name = {name}
                component= "p"
                className="text-red-500 text-sm mt-1"
            />
        </div>
    );
}

export default InputField;
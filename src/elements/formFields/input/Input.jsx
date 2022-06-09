import React from "react";
import style from './input.module.css';

const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...input} {...props} />
        </div>
    )
};

export default Input;
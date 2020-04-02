import React from 'react';
import './index.css';

const InputText = ({ inputClass, type, name, placeholder }) => (
    <input
        className={`${inputClass} form_input`}
        type={type}
        name={name}
        placeholder={placeholder}
    />
);

export default InputText;

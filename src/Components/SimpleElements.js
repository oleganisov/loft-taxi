import React from 'react';
import marker from '../assets/img/marker.svg';
import './SimpleElements.css';

const ButtonYellow = ({ inputClass, text }) => (
    <div style={{ textAlign: 'right' }}>
        <button className={`${inputClass} button_yellow`}>{text}</button>
    </div>
);

const InputText = ({ inputClass, type, name, placeholder }) => (
    <input
        className={`${inputClass} form_input`}
        type={type}
        name={name}
        placeholder={placeholder}
    />
);

const Logo = ({ inputClass }) => (
    <div className={`${inputClass} logo`}>
        <img className="logo__img" alt="balloon" src={marker} />
        <span className="log__text_left">Loft</span>
        <span className="log__text_right">Taxi</span>
    </div>
);

export { ButtonYellow, InputText, Logo };

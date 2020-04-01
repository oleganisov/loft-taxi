import React from 'react';
import marker from '../assets/img/marker.svg';
import './SimpleElements.css';

const ButtonYellow = ({ buttonClass, text }) => (
    <div style={{ textAlign: 'right' }}>
        <button className={`${buttonClass} button_yellow`}>{text}</button>
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

const Logo = ({ logoClass, txtRightClass = '' }) => (
    <div className={`${logoClass} logo`}>
        <img className="logo__img" alt="balloon" src={marker} />
        <span className="logo__text_left">Loft</span>
        <span className={`logo__text_right ${txtRightClass}`}>Taxi</span>
    </div>
);

export { ButtonYellow, InputText, Logo };

import React from 'react';
import './index.css';

const ButtonActive = ({ buttonClass, text }) => (
    <div style={{ textAlign: 'right' }}>
        <button className={`${buttonClass} button_yellow`}>{text}</button>
    </div>
);

export default ButtonActive;

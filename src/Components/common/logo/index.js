import React from 'react';
import marker from '../../../assets/img/marker.svg';
import './index.css';

const Logo = ({ logoClass, txtRightClass = '' }) => (
    <div className={`${logoClass} logo`}>
        <img className="logo__img" alt="balloon" src={marker} />
        <span className="logo__text_left">Loft</span>
        <span className={`logo__text_right ${txtRightClass}`}>Taxi</span>
    </div>
);

export default Logo;

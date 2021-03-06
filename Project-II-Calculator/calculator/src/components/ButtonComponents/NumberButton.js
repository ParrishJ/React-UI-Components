import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
    <div className="numberButtonContainer">
        <button className={`numberButton ${props.buttonStyle}`}>{props.text}</button>
    </div>
    );
};

export default NumberButton
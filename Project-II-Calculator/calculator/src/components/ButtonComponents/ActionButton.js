import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return ( 
    <div className="actionButtonContainer">
        <button className="actionButton">{props.text}</button>
    </div>
    );
};

export default ActionButton
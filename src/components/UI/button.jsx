import React from 'react';
import classes from './button.module.css';

const Button = ({text, icon, type, ...props}) => {
    return (
        <button className={classes.button + (type === 'green' ? " " + classes.green : "")} {...props}>
            <svg>
                <use xlinkHref={icon}/>
            </svg>
            <span>{text}</span>
        </button>
    );
};

export default Button;
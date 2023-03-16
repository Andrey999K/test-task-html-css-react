import React from 'react';
import classes from './Avatar.module.css';

const Avatar = ({src}) => {
    return (
        <div className={classes.avatar}>
            <img src={src} alt="avatar"/>
        </div>
    );
};

export default Avatar;
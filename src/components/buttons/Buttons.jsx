import React from 'react';
import Avatar from "../avatar/Avatar";
import sprite from "../../img/sprite.svg";
import classes from "./Buttons.module.css";

const Buttons = ({avatar, username}) => {
    return (
        <div className={classes.buttons}>
            <button className={classes.buttonsMessage + ' ' + classes.newMessage}>
                <div>
                    <svg>
                        <use xlinkHref={sprite + '#message'}/>
                    </svg>
                </div>
            </button>
            <div className={classes.profile}>
                <div className="profile__avatar">
                    <Avatar src={avatar}/>
                </div>
                <span className="profile__name">{username}</span>
            </div>
        </div>
    );
};

export default Buttons;
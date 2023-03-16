import React from 'react';
import classes from './ModalWindow.module.css';
import sprite from '../../img/sprite.svg';

const ModalWindow = ({state, close, children}) => {
    return (
        <div className={classes.blackBackground + (state ? '' : ' ' + classes.hidden)}>
            <div className={classes.modalWindow}>
                {children}
                <button
                    className={classes.modalClose}
                    onClick={close}
                >
                    <svg>
                        <use xlinkHref={sprite + '#close'}/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ModalWindow;
import React from 'react';
import classes from './Header.module.css';
import home from '../../img/sprite.svg';

const Header = ({logo, listItem}) => {
    return (
        <header className={classes.header}>
            <div className="header__content">
                <div className="header__logo">
                    <img src={logo} alt="logo" className="header__logo-img"/>
                </div>
                <nav className={classes.headerNav}>
                    <ol className={classes.headerList}>
                        {listItem.length !== 0 ?
                            listItem.map(item =>
                                <li key={item.id} className={classes.headerListItem + (item.active ? ' ' + classes.headerListItemActive : '')}>
                                    <a href={item.link.link} className={classes.headerListItemLink}>
                                        <svg className={classes.headerListItemIcon}>
                                            <use xlinkHref={item.image.src}/>
                                        </svg>
                                        <span className={classes.headerNavItemText}>{item.link.text}</span>
                                    </a>
                                </li>
                            ) :
                            ''
                        }
                    </ol>
                </nav>
            </div>
        </header>
    );
};

export default Header;
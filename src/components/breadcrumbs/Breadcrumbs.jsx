import React from 'react';
import classes from './Breadcrumbs.module.css';

const Breadcrumbs = ({data}) => {
    return (
        <div>
            <ol className={classes.breadcrumbsList}>
                {data.map(item =>
                    <li key={item.id} className={classes.breadcrumbsItem}>
                        <a href={item.link} className="breadcrumbs__item-link">{item.text}</a>
                    </li>
                )}
            </ol>
        </div>
    );
};

export default Breadcrumbs;
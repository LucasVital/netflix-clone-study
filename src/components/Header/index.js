import React from 'react';
import './style.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="netflix-logo.svg" alt="NetClone"/>
                </a>
            </div>
            <div className="header--user">
                <img src="avatar.png" alt="Image User"/>
            </div>
        </header>
    );
}
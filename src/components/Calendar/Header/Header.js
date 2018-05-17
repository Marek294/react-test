import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Terminplaner</h2>
            <div className="header__control">
                <span className="control__prev">&lt;</span>
                <span className="control__date">9 &mdash; 15. November 2015 </span>
                <span className="conrol__next">&gt;</span>
            </div>
            <span className="header__month"></span>
            <span className="header__slider"></span>
        </div>
    );
};

export default Header;
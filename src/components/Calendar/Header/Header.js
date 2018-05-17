import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div class="header">
            <h2>Terminplaner</h2>
            <div class="header__control">
                <span class="control__prev">&lt;</span>
                <span class="control__date">9 &mdash; 15. November 2015 </span>
                <span class="conrol__next">&gt;</span>
            </div>
            <span class="header__month"></span>
            <span class="header__slider"></span>
        </div>
    );
};

export default Header;
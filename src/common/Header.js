import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navActiveStyle = {
        color: 'cyan'
    };

    return (
        <header>
            <h1 class="header__title">MSM</h1>
            <nav>
                <ul class="nav__list">
                    <li class="nav__link">
                        <NavLink
                            exact
                            to="/"
                            activeStyle={navActiveStyle}>배치</NavLink>
                    </li>
                    <li class="nav__link">
                        <NavLink
                            to="/music"
                            activeStyle={navActiveStyle}>악보</NavLink>
                    </li>
                    <li class="nav__link">
                        <NavLink
                            to="/setting"
                            activeStyle={navActiveStyle}>설정</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
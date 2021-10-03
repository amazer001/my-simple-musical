import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>MSM</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">배치</Link>
                    </li>
                    <li>
                        <Link to="/music">악보</Link>
                    </li>
                    <li>
                        <Link to="/setting">설정</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
import React from "react";
import { Link } from 'react-router-dom';

import './nav-bar.styles.css'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>HadithLibrary</Link>
                </li>
                <li>
                    <Link to='/random-hadith'>Random Hadith</Link>
                </li>
                <li>
                    <Link to='/all-books'>All Books</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
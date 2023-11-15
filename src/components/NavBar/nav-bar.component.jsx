import React from "react";
import { Link } from 'react-router-dom';

import './nav-bar.styles.css'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/' className="importante">HadithLibrary</Link>
                </li>
                <li>
                    <Link to='/random-hadith' className="importante">Random Hadith</Link>
                </li>
                <li>
                    <Link to='/all-books' className="importante">All Books</Link>
                </li>
                <li>
                    <Link to='/favorites' className="importante">Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li className="link"><Link to='/'>To Do's</Link></li>
                    <li className="link"><Link to='/Calendar'>Calendar</Link></li>
                </ul>
            </nav>
        </div>
    )
};
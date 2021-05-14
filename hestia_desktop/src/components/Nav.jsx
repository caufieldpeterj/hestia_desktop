import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Login</Link>
                </li>
            </ul>
            <a href="">Home</a>
            <a href="">All Listings</a>
            <a href="">News</a>
            <a href="">Mortgage Calculator</a>
        </nav>
    )
}

export default Nav

import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar">
            <h1><Link to="/">Лозенец Къщички</Link></h1>
            <ul>
                <li><Link to="/">Начало</Link></li>
                <li><a href="#contact">Контакт</a></li>
                <li><a href="#location">Място</a></li>
            </ul>
        </nav>
    )
}
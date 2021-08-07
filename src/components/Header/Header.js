import React from 'react'
import './styles.css';

const Header = () => {
    return (
        <header>
            <img src='images/logo.png' alt='logo' />
            <nav>
                <ul className='nav_list'>
                    <li className='nav_item'><a href='/'>Home</a></li>
                    <li className='nav_item'><a href='/projects'>Projects</a></li>
                    <li className='nav_item'><a href='/contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

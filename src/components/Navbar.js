import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
function Navbar() {
    //variables 
    const [clickMenu, setClickMenu] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(true);

    //methods
    const toggleClickMenu = (() => {
        setClickMenu(!clickMenu);
    })
    const closeMobileMenu = (() => {
        setClickMenu(false)
    })
    const showButton = (() => {
        if (window.innerWidth <= 960) {
            setButtonPressed(false)
        } else {
            setButtonPressed(true)
        }
    })

    window.addEventListener('resize', showButton)

    //template
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        My Travel Bl<i className="fas fa-globe-europe"></i>g
                    </Link>
                    <div className="menu-icon" onClick={toggleClickMenu}>
                        <i className={clickMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
                <ul className={clickMenu ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                    <li className='nav-item'>
                        <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                            Blogs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {buttonPressed && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </nav>
        </div>
    )
}

export default Navbar

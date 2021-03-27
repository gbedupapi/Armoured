import React from 'react'
import Logo from '../../Access/Image/lop 3.png';

import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="separate">
                <div className="page">
                    <img src={Logo} alt="company logo"/>
                    <h3>ARMOURED</h3>
                </div>
                <div className="page-side">
                    <div className="side">
                        <div className="anchor">
                            <a href="/"><span>Home</span></a>
                        </div>
                        <div className="anchor">
                            <a href="/about"><span>About Us</span></a>
                        </div>
                        <div className="anchor">
                            <a href="/profile"><span>Profile</span></a>
                        </div>
                        <div className="anchor">
                            <a href="/login"><span>Login</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'


const Navbar = () => {
    return ( 
        <header>
            <div className="navwraper">
            <div className="logo right">
                <img src={logo} alt="company logo" className="logoImage"></img>
            </div>
            <div className="navigation left">
            <nav>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
                </nav>
                </div>
                </div>
        </header> 
     );
}
 
export default Navbar;
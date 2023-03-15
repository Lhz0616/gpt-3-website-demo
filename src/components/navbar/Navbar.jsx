import react from 'react';
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import './navbar.css';

import logo from "../assets/logo.svg";

// BEM -> Block Element Modifier (Naming convention for className)

const Navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt__3navbar-links_logo">
                    <img src={logo} alt="logo" />  
                </div>
            </div>
        </div>
        )
}

export default Navbar
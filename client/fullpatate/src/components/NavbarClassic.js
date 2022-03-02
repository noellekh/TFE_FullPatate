import React, {useState} from "react";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import '../css/NavbarClassic.css';
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-fp.png";

const NavbarClassic =()=>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    
    return (
        <>

            <nav className="navbar-classic">
                <div className="logo-fp">
                    <img className="logo-img" src={logo} alt="logo-navbar"/> 

                </div>

                <div className={showMediaIcons ? "menu-classic mobile-menu-classic": "menu-classic"}>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">E-shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Inscription</a></li>
                        <li><a href="#">Connexion</a></li>
  

                        
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><a href ='#'><FaFacebookSquare /></a></li>
                        <li><a href ='#'><FaInstagramSquare /></a></li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    
                    </div>

                </div>
            </nav>
        </>

    )
}

export default NavbarClassic;
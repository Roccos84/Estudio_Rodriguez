import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
// import logo1 from '../../img/R&A-logo-01.png';
import logo from '../../img/R&A-logo-01-V1.png';
import './Navbar.css';


export default function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className='NavbarItems'>
            <img className="navbar-logo" src={logo} alt="Logo" />
            {/* <h1 className="navbar-logo">Logo <i className="fab fa-react"></i> </h1> */}
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.nombreClase}>
                                {item.titulo}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
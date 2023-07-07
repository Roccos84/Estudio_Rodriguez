import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
// import logo1 from '../../img/R&A-logo-01.png';
import logo from '../../img/R&A-logo-01-V1.png';
import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className='NavbarItems'>
            <Link to="/"><img className="navbar-logo" src={logo} alt="Logo" /></Link>
            {/* <h1 className="navbar-logo">Logo <i className="fab fa-react"></i> </h1> */}
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (


                        <li key={index}>
                            <Link className={item.nombreClase} to={item.url} >
                                {item.titulo}
                            </Link>

                        </li>
                    )
                })}
            </ul>
        </div>

    )
}
import React from "react";
import { useState } from "react";
import "../css/navbar.css"
import burger_image from '../assets/burger_nav.png'
import home_icon from '../assets/home.png'
import css_icon from '../assets/css_icon.png'
import notes_icon from '../assets/notes_icon.png'
import service_icon from '../assets/service_icon.png'
import contact_icon from '../assets/contact_icon.png'

export default function Navbar(){
    const [burger, useBurger] = useState(0);
    const [CheckNav, useCheckNav] = useState(false)
    // const [test, useTest] = useState('sidebar_open');
    const [test, useTest] = useState(false);

    //error ini
    // const closebar = () => {
    //     test === 'buka' ? (
    //         useTest(test = 'buka')
    //     ) : (
    //         useTest(test = 'tutup')
    //         )
    //     }

    //jika true sidebar akan buka
    const classBar = () => {
        return CheckNav ? "sidebar_open" : "sidebar_close"
    }

    const closebar = () => {
        // useTest(test === 'sidebar_open' ? 'sidebar_close' : 'sidebar_open')
        useTest(!test);
    }

    const handleCheckNavbar = () => {
        useCheckNav(!CheckNav);
    }
    

    return(
        <div className="sidebar">
            
            <div className={classBar()}>
                {
                    CheckNav ? (
                        <nav className="navigate">
                            {/* <button className="ganti" onClick={closebar}> ganti </button> */}
                            {/* button for nav */}
                            
                            {/* link */}
                            <ul className="nav-links">

                                <div className="burger-button">
                                    <input type="checkbox" checked={CheckNav} onChange={handleCheckNavbar} name="burger-open" id="burger-open" />
                                    <label htmlFor="burger-open" className="burger_contain">
                                        <img src={burger_image} alt="burger_img" className="burger-img"/>
                                    </label>
                                </div>

                                <li className="icon-img">
                                    <a href="/home">
                                        <img src={home_icon} alt="home_icon" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/list">
                                        <img src={notes_icon} alt="notes_icon" className="notes-icon" />    
                                    </a>
                                </li>

                                <li>
                                    {/* <a href="/"> */}
                                        <img src={service_icon} alt="service-icon" className="notes-icon" />
                                    {/* </a> */}
                                    <ul className="dropdown">
                                        <li><a href="/">service 1</a></li>
                                        <li><a href="/">service 2</a></li>
                                        <li><a href="/">service 3</a></li>
                                        <li><a href="/">service 4</a></li>
                                        <li><a href="/">service 5</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="/css">
                                        <img src={css_icon} alt="css-icon" className="notes-icon" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/contact">
                                        <img src={contact_icon} alt="contact-icon" className="notes-icon" />
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    ) : (
                        <div className="close">
                            <input type="checkbox" checked={CheckNav} onChange={handleCheckNavbar} name="burger-close" id="burger-close" />
                            <label htmlFor="burger-close" className="burger_button">
                                <img src={burger_image} alt="burger_img" className="burger-cls"/>
                            </label>
                            {/* <button className="ganti" onClick={closebar}> ganti </button> */}
                        </div>
                    )}
            </div>
        </div>
    )
}
import React, {useState} from "react"
import '../css/sidebar.css'
import home_img from "../assets/home.png"
import service_img from "../assets/service_icon.png"
import burger_img from "../assets/burger_nav.png"
import list_img from "../assets/notes_icon.png"
import css_img from "../assets/css_icon.png"

export default function Sidebar() {

    const [burger, useBurger] = useState(true)
    const [hoverBox, useHoverBox] = useState(false)

    const handleBurger = () => {
        useBurger(!burger)
    }

    const handleHoverIn = () => {
        useHoverBox(true)
    }

    const handleHoverOut = () => {
        useHoverBox(false)
    }
    
    return (
        <div className="sidebars-container">
            { burger ? 
                <div className="sidebars-open">
                    <div className="bg-open"></div>

                    <div className="boxes box1">
                        <input type="checkbox" name="burger-checkbox" id="burger" onChange={handleBurger} />
                        <label htmlFor="burger">
                            <img src={burger_img} alt="burger" />
                        </label>
                    </div>

                    <div className="boxes box2">
                        <a href="/home">
                            <img src={home_img} alt="home" />
                        </a>
                        <div className="box-name">Home</div>
                    </div>

                    <div className="boxes box3">
                        <a href="/list">
                            <img src={list_img} alt="list" />
                        </a>
                        <div className="box-name">List</div>
                    </div>
                    
                    <div className="boxes box4"
                    onMouseEnter={handleHoverIn}
                    onMouseLeave={handleHoverOut}>
                        <div className="boxes1 logo-box">
                            <img src={service_img} alt="services" />
                        </div>
                        {/* <div className={`boxes1 ${hoverBox ? 'text-box' : 'text-box-remove'}`}>
                            test
                        </div> */}
                        <ul className="dropdown">
                            <div className="dropbox">test</div>
                            <div className="dropbox">tes</div>
                            <div className="dropbox">tes</div>
                            <div className="dropbox">tes</div>
                            <div className="dropbox">tes</div>
                        </ul>
                    </div>

                    <div className="boxes box5">
                        <a href="/css">
                            <img src={css_img} alt="css" />
                        </a>
                        <div className="box-name">CSS</div>
                    </div>
                    
                    <div className="boxes box6">
                        <a href="/object">
                            <img src={css_img} alt="css" />
                        </a>
                        <div className="box-name">Object</div>
                    </div>

                </div>
                
                    :

                <div className="sidebars-close">
                    <div className="bg-close"></div>
                    <div className="boxes box1">
                        <input type="checkbox" name="burger-checkbox" id="burger" onChange={handleBurger}/>
                        <label htmlFor="burger" className="label-icon-burger">
                            <img src={burger_img} alt="burger" />
                        </label>
                    </div>
                    <div className="boxes box2"></div>
                    <div className="boxes box3"></div>
                    <div className="boxes box4"></div>
                    <div className="boxes box5"></div>
                    <div className="boxes box6"></div>
                </div>
            }
            
        </div>
    )
}
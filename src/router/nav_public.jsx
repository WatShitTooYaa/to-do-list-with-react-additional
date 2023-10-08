// import "../css/nav_pub.css"

export default function Naver(){
    return(
        <nav className="navbar">
            {/* logo */}
            <div className="logo">Logo</div>

            {/* nav menu */}
            <ul className="nav-links">
                {/* for burger menu */}
               <input type="checkbox" name="hamburger" id="burger" />
               <label htmlFor="burger" className="hamburger">&#9776;</label> 
               
               {/* menu */}
               <div className="menu">
                    <li><a href="/">home</a></li>
                    <li><a href="/">about</a></li>
                    <li className="services">
                        <a href="/">service</a>
                        <ul className="dropdown">
                            <li><a href="/">tes1</a></li>
                            <li><a href="/">tes2</a></li>
                            <li><a href="/">tes3</a></li>
                            <li><a href="/">tes4</a></li>
                            <li><a href="/">tes5</a></li>
                        </ul>
                    </li>
                    <li><a href="/">pricing</a></li>
                    <li><a href="/">contact</a></li>
               </div>

            </ul>
        </nav>
    )
}
import "../css/Coba.css"
import burger_image from '../assets/burger_nav.png'

export default function CssTry(){
    return(
        <div className="block_css">
            <h1 className="Cobah1">
                Hello World !!!
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita inventore tempora itaque nesciunt dolor ad officiis.
                Excepturi iure qui saepe? Nisi voluptate doloremque non minima natus!
                Officiis sunt reprehenderit odit.
            </p>
            <ul>
                <li><a href="#">list 1</a></li>
                <li><a href="#">list 2</a></li>
                <li><a href="#">list 3</a></li>
                <li><a href="#">list 4</a></li>
                <li><a href="#">list 5</a></li>
            </ul>
            <ol>
                <li><a href="#">list 6</a></li>
                <li><a href="#">list 7</a></li>
                <li><a href="#">list 8</a></li>
                <li><a href="#">list 9</a></li>
                <li><a href="#">list 10</a></li>
            </ol>
            
            {/* <div className="image_test">
                <img src={burger_image} alt="burger" className="burger-img"/>
            </div> */}

            <div className="box_contain">
                <div className="box box1"></div>
                <div className="box box2"></div>
                <div className="box box3"></div>
                <div className="box box4"></div>
                <div className="box box5"></div>
            </div>

            <div className="container">
                <div className="kotak-1"></div>
            </div>
        </div>
    )
}
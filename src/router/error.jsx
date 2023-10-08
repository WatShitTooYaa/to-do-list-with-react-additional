import {redirect, useNavigate} from "react-router-dom"


export default function ErrorElement(){
    const home = useNavigate();
    return(
        <>
            <div>
                <p>
                    tidak ada link tersebut
                </p>
                <br />
                <p>
                    return home
                </p>
                <button onClick={() => home('/')}>Home</button>
            </div>
        </>
    )
}
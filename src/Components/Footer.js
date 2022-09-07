import { useState } from "react"
import './Footer.css'

function Footer () {

    const [counter,setCounter] = useState(0)

    function increaseCounter(){
        setCounter(counter+1)
    }
    return(
        <div  className="footer" >
            <div onClick={increaseCounter}>{counter}</div>
        </div>
    )
}

export default Footer
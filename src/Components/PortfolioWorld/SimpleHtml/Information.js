import React, { useState } from "react"
import "./Information.css";

import {useSpring, animated as a } from "react-spring";


export default function Information(props){


    const [clicked, setClicked] = useState(true);

    const transformInfo = useSpring({transform : !clicked  ? 'translate3d(0,0%,0)' : 'translate3d(0,-120%,0)'})

    const myStyle = {
        display : "inline"
    }



    return(
        <>
        <a.div className = "Information" style = {transformInfo}>
            <div >
                <p>
                <span><b>Hi</b></span>, Im your Guide.
                this website is still in development phase.
                So dont work on finding the bugs instead enjoy it.
                </p>
                <p>Come near the names tags, <span>Click</span> on them to get more Info.</p>

                <div> 
                    <h3><span>CONTROLS</span></h3>
                    <h4> Forward  : press<span> &uarr; </span>key</h4>
                    <h4>Backwards : press<span>  &darr;	 </span>key</h4>
                    <h4>Left : press<span> &larr; </span>key</h4>
                    <h4>Right : press<span> &rarr; </span>key</h4>
                    <h4>Dance : press<span> Space </span>key</h4>
                </div>
                <button onClick = {() => setClicked(prev => !prev)}>Close</button>
            </div>
        </a.div>
        <div className = "showInfo" style= {clicked ? myStyle : null}onClick = {() => setClicked(prev => !prev)}>
        &#9432; info
        </div>
        <div className = "goBack" onClick = {props.Click}>
        &#8617; Back
        </div>
    </>
    )
}
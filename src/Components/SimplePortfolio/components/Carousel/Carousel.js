import React, { useState } from "react";
import "./Carousel.css"
import ImageCard from "./ImageCard";





export default function Carousel() {

    const [cardIndex, setCardIndex] = useState(1);

    const handleClick = (e) => {
        const sign = e.target.innerText;

        console.log(e)
        
        switch (sign) {
            case "<":
                if(cardIndex === 0)return;
                setCardIndex(cardIndex - 1)
                break;
            case ">":
                if(cardIndex === 2)return;
                setCardIndex(cardIndex + 1);
                break;
    
            default:
                break;
        }
    }


    return(
    <div className="CarouselConatiner">
        <div>
            <h1>What <span>People</span> Say About <span>Me</span></h1>
        </div>
        <div className = "cardContainer">
            <p name = "smallerThan" onClick = {(e) => handleClick(e)}>&#60;</p>
            <ImageCard index = {cardIndex}/>
            <p name = "graterThan" onClick = {(e) => handleClick(e)}>&#62;</p>
        </div>
              
    </div>
    )
}
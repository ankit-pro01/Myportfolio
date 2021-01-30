import React from "react";
import {animated as a } from "react-spring";
import "./ImageCard.css"



const carouselData = [
    {   name : "Rohit",
        image : "",
        details : "Minim mollit qui excepteur ullamco v elit culpa do dolor culpa. Ullamco nisi commodo minim reprehenderit voluptate eu amet. Commodo aliquip ex ut ea ex deserunt."
    },
    {
        name : "Amit",
        image : "",
        details : "Excepteur aliquip eu esse occaecat minim. Culpa magna laborum amet Lorem ut sunt voluptate. Est aliquip fugiat quis in dolore. Dolor laboris amet aute id do ipsum sit velit consectetur laboris laboris enim. Id sit adipisicing nisi laboris proident ipsum ullamco est id non labore elit. Enim laboris sint ut nulla cillum Lorem ullamco dolore incididunt eiusmod."
    },
    {
        name: "Sumit",
        image : "",
        details : "Occaecat minim sunt officia eu cillum nostrud amet labore. Duis deserunt occaecat aute consectetur deserunt consequat occaecat nulla nostrud veniam reprehenderit eu eiusmod reprehenderit. Occaecat id incididunt enim dolore. Aliquip sit ut eiusmod minim laborum irure. Et aute sunt duis proident aute amet culpa."
    }
]




export default function ImageCard({index = 1, style}) {


    console.log(style)
    const name = carouselData[index].name;
    // const image = carouselData[index].image;
    const details = carouselData[index].details

    return(
    <div className ="ImageContainer">

        <a.div style = {style} className="ImageCard">
            <div className = "Image">
            </div>
            <div className = "Content">
                <h4>{name}</h4>
                <p>{details}</p>
            </div>      
        </a.div>
    </div>
    )
}
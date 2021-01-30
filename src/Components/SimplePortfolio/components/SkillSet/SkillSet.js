import React, { useState } from "react";
import "./SkillSet.css";



export default function SkillSet() {

    const [skillName, setSkillName] = useState("JavaScript")

    const handleHover = (e) => {
        const value = e.target.dataset.skill;
        setSkillName(value)
    }

    return(
    <div className="SkillSet">

        <div className = "percentage">
            <div onMouseOver = {(e) => handleHover(e)} className="bar front advanced" data-skill="JavaScript" ></div>
            <div onMouseOver = {(e) => handleHover(e)} className="bar front advanced" data-skill="Html5/Css3" ></div>
            <div onMouseOver = {(e) => handleHover(e)} className="bar front advanced" data-skill="Reactjs"></div>
            <div onMouseOver = {(e) => handleHover(e)} className="bar front advanced" data-skill="Python"></div>
            <div onMouseOver = {(e) => handleHover(e)} className="bar front intermediate" data-skill="Nodejs"></div>
            <div onMouseOver = {(e) => handleHover(e)} className="bar front intermediate" data-skill="Flask"></div>
            <div onMouseOver = {(e) => handleHover(e)}className="bar front intermediate" data-skill="MongoDB"></div>
        </div>

        <div className = "skillName">
            <h1>{skillName}</h1>
        </div>

    </div>
    )
}
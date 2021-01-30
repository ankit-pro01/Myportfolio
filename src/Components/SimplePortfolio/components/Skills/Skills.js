import React from "react";
import SkillSet from "../SkillSet/SkillSet";
import "./Skills.css"



export default function Skills() {



    return(
    <div className="SkillsContainer">
        <h1>My <span>Skills</span></h1>
        <div className = "Chart">
            <SkillSet />
        </div>   
    </div>
    )
}
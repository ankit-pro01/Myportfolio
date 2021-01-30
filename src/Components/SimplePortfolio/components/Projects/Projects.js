import React, { useState } from "react";

import "./Projects.css"

import {projectsData} from "../Projects/AllProjectsData"


const myStyle = {
    backgroundColor : "#555",
    borderBottom : "5px Solid orange"
}




export default function Projects() {

    const [id, setId] = useState(1)
 
    
    console.log("project data : ", projectsData)

    const [state, setState] = useState(projectsData[0])




    const handleClick = (item) => {
        setId(item.id);
        setState(item);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    
    return(
    <div className="ProjectsContainer">
        <div className = "ProjectHeader">
            <h1>My <span>Projects</span></h1>
        </div>
        <div className = "DisplayProjectContainer">
            <div className ="displayProjectName">{state.name}</div>
            <div className="displayProjectDetails">{state.details}</div>
        </div>

        <div><h4>Project List</h4></div>


        <div className = "AllProjects">
            {
                projectsData.map((item) => (
                    <div key = {item.id} style = { item.id === id ? myStyle : null}  onClick = {() => handleClick(item)} className = "projectCard">
                        <h5>{item.name}</h5>
                        <p>{item.details}</p>
                    </div>
                ))
            }
        </div>
         
    </div>
    )
}
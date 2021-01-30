import React from "react"

import "./Sidebar.css"

function Sidebar({dispatch, state, setSidebar}) {
    
  const myStyles = {
    backgroundColor : "#555",
    color : "orange"
  }

  return (
    <div className = "Sidebar">
        <div>    
            <p style = {state.about && myStyles}  onClick = {() => dispatch({type : "about", set : setSidebar})}>About</p>

            <p style = {state.skills && myStyles} onClick = {() => dispatch({type : "skills", set : setSidebar})}>Skills</p>

            <p style = {state.projects && myStyles} onClick = {() => dispatch({type : "projects", set : setSidebar})}>Projects</p>

            <p style = {state.testimonial && myStyles} onClick = {() => dispatch({type : "testimonial", set : setSidebar})}>Testimonial</p>

            <p style = {state.contact && myStyles} onClick = {() => dispatch({type : "contact", set : setSidebar})}>Contact</p> 
            
            <p onClick = {() => dispatch({type : "home", set : setSidebar})}>Home</p>
        </div>
    </div>
  )
}

export default Sidebar;


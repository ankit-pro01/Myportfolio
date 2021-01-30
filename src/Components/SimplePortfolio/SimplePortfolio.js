import React, { useReducer, useState } from "react"
import { useSpring, animated as a} from "react-spring";
import "./SimplePortfolio.css";



import About from "./components/About/About"
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar"

import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";

// import { FiAlignJustify } from "react-icons/fi";
// import { CgClose } from "react-icons/cg";


const ABOUT = "about";
const CONTACT = "contact"
const TESTIMONIAL = "testimonial"
const SKILLS = "skills"
const PROJECTS = "projects"
const HOME = "home"

function SimplePortfolio(props) {
    
    const [state, dispatch] = useReducer(myReducer, {about : true});

    const [sideBarOpen, setSidebar] = useState(false);
    
    const animateSidebar = useSpring({transform : sideBarOpen ? "translate3d(0%,0,0)" : "translate3d(-100%,0,0)"})

    
    function myReducer(state, action){

        switch (action.type) {
            
            case ABOUT:
                if(action.set)action.set(false)
                return({"about" : true})

            case CONTACT:
                if(action.set)action.set(false)
                return({"contact": true})
                
            case TESTIMONIAL:
                if(action.set)action.set(false)
                return({"testimonial": true})

            case SKILLS:
                if(action.set)action.set(false)
                return({"skills": true})

            case PROJECTS:
                if(action.set)action.set(false)
                return({"projects": true})

            case HOME:
                props.history.push("/")

            default:
                return(state)
        }
    }


    const handleClick = () => {
        setSidebar(!sideBarOpen)
    }

  return (
    <div className = "Container">
        <div className = "navButton" onClick = {() => handleClick()}>
            {!sideBarOpen ? <p>&#9776;</p> 
            : <p>&#10006;</p>}
        </div>
        
      <div className = "SidebarContainer1">
          <Sidebar dispatch = {dispatch} state = {state}/>
      </div>

      <a.div style = {animateSidebar } className = "SidebarContainer">
          <Sidebar dispatch = {dispatch} state = {state} setSidebar = {setSidebar}/>
      </a.div>

      <div className = "Content">
        {state.about && <About />}
        {state.skills && <Skills />}
        {state.testimonial && <Testimonials />}
        {state.projects && <Projects />}
        {state.contact && <Contact />}


      </div>
    </div>
  )
}

export default SimplePortfolio;


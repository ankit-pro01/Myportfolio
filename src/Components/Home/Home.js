import React, { useState }  from 'react'


// import demo1 from "../../assets/videos/video1.mp4"
// import demo2 from "../../assets/videos/video2.mp4"

import "./Home.css"

import { useSpring, animated as a} from 'react-spring'


export default function Home(props) {

  const [seeSimpleOne, setSimpleOne] = useState(false)

  const leftTransition = useSpring({transform : seeSimpleOne ? 'translate3d(0,0%,0)' : 'translate3d(0,-120%,0', display : seeSimpleOne ? 'block': 'none'})
  const rightTransition = useSpring({transform : seeSimpleOne ? 'translate3d(0,0%,0)' : 'translate3d(0,120%,0', display : seeSimpleOne ? 'block': 'none'})
  
  return (
    <>
    <div className = "video">
    <a.div style = {leftTransition} className ="video1">
      <button onClick =  {() => {props.history.push('/world')}}>click me</button>
    </a.div>
    <a.div style = {rightTransition} className = "video2">
      <button onClick = {() => {props.history.push('/simple')}}>click me</button>
    </a.div>
    </div>

    <div className = "container">
      <div className = "header">
      </div>
      <div className = "main">
        <h1>ANKIT <span style  = {{color : "orange"}}>SINGH</span></h1>
        <h4>Im a web developer, coder</h4>
        <button onClick = {() => {setSimpleOne(true)}}>More About me</button>
      </div>
    </div>

  </>
  )
} 
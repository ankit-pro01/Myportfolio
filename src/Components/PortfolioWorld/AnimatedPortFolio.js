import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, } from 'react-three-fiber'
import {Html, OrbitControls, Sky} from "@react-three/drei"
import { Physics } from 'use-cannon';

import  { Redirect } from 'react-router-dom'



import Camera from "./components/Camera/Camera";
import Player from "./components/Player/Player";
import City  from "./components/City/City";
import Terrain from "./components/Terrain/Terrain";
import JoystickInput from './Controller/JoyStickInput';


import "./AnimatedPortFolio.css"
import Star from './components/Star/Star';

import Information from './SimpleHtml/Information';
import About from './components/BioPages/About/About';
import Skills from './components/BioPages/Skills/Skills';
import Contact from './components/BioPages/Contact/Contact';
import Loader from './components/Loading/Loader';


const aboutStarPosition = {name : "ABOUT",x: 7, y : 0.2, z: 15 , rotation : [0,0,0]}
const skillStarPosition = {name : "SKILLS", x: 10, y : 0.2, z: -6, rotation : [0,0,0]}
const contactStarPosition = {name : "CONTACT", x: -1, y: 0.2, z: -2, rotation : [0,0,0]}
const welComePosition = {name : "WELCOME", x: 20, y: 0.2, z: 4, rotation : [0,1.5,0]}



export default function AnimatedPortFolio(props) {


  const [myacton, setMyAction] = useState("Idle");
  const [showLoading, setShowLoading] = useState(false);
  const [Page, setPage] = useState({about: false, skills: false, contact: false})

  const handleRoute = () => {
    props.history.push("/");
    window.location.reload();

  }
     
    useEffect(
       () => {
         let timer1 = setTimeout(() => setShowLoading(true), 10000)
            return () => {
           clearTimeout(timer1)
         }
       },
       [] 
     )

  return (
    <>
    {!showLoading && <div className = "Loader">
      <Loader /></div>}

    {Page.about && <About setPage = {setPage} />}
    {Page.skills && <Skills setPage = {setPage} />}
    {Page.contact && <Contact setPage = {setPage} />}

    <Information Click = {handleRoute}/>


    <Canvas style = {{background: "white",
      width: "100%",
      height: "100vh" }}>
      <OrbitControls />
      <Camera />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]} 
        inclination={0} 
        azimuth={0.25} 
        />
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
      <JoystickInput />
      <Suspense fallback = {null}>{<City/>}</Suspense>
      
      <group className = "myStars">
        <Star position = {aboutStarPosition} setPage = {setPage}/>
        <Star position = {skillStarPosition} setPage = {setPage}/>
        <Star position = {contactStarPosition} setPage = {setPage}/>
        <Star position = {welComePosition} setPage = {setPage}/>
      </group>

        <Player action = {myacton} setMyAction = {setMyAction}/>
        <Physics>
          <Terrain />

        </Physics>

    </Canvas>  
  </>
  )
} 
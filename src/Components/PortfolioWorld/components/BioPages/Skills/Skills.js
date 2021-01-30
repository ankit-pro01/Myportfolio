import { OrbitControls, Stars } from "@react-three/drei";
import React, { useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import Star from "../../Star/Star";
import "./Skills.css"

const JsSkillPosition = {name : "JAVASCRIPT",x: 0, y : 0, z: 1 , rotation : [0,0,0]}
const PythonSkillPosition = {name : "Html",x: 3, y : 0.4, z: 2.5 , rotation : [0,0,0]}
const HTMLSkillPosition = {name : "Python",x: -2, y : 0, z: 3 , rotation : [0,0,0]}
const CSSSkillPosition = {name : "css",x: 2, y : -1, z: -1 , rotation : [0,0,0]}
const NodeSkillPosition = {name : "Nodejs",x: 0, y : 1, z: 0.5 , rotation : [0,0,0]}
const ReactSkillPosition = {name : "REACTjs",x: 4, y : 0, z: -1.5 , rotation : [0,0,0]}
const MongoDbSkillPosition = {name : "MongoDb",x: 2, y : -0.5, z: -1 , rotation : [0,0,0]}




// function Dolly() {
//     // This one makes the camera move in and out
//     useFrame(({ clock, camera }) => {
//       camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 42
//     })
//     return null
//   }



export default function Skills({setPage}) {   
    
    return (
        <div className = "Skills3D">
            <div className = "Skills3D-Content">
            <h2>My <span>Skills</span></h2>
            
            <Canvas className = "SkillsCanvas" style = {{display: "flex"}}>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.8} position={[300, 300, 400]} />
                <Stars />
                <group>
                    <Star position = {JsSkillPosition} setPage = {setPage}/>
                    <Star position = {PythonSkillPosition} setPage = {setPage}/>
                    <Star position = {HTMLSkillPosition} setPage = {setPage}/>
                    <Star position = {CSSSkillPosition} setPage = {setPage}/>
                    <Star position = {NodeSkillPosition} setPage = {setPage}/>
                    <Star position = {ReactSkillPosition} setPage = {setPage}/>
                    <Star position = {MongoDbSkillPosition} setPage = {setPage}/>
                </group>
            </Canvas>

            <p>click and move the mouse</p>

            <button onClick = {() => setPage({"skills": false})}>Close</button>

            </div>

           
        </div>
    )
}
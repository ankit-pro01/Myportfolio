import React, { Suspense } from 'react'

import "./About.css";
import avatar2 from "../../../../../assets/avatar/avatar2.jpg";
    // import avatar from "../../../../../assets/avatar/avatar.jpg"

import * as THREE from 'three'

import { Canvas, useLoader  } from "react-three-fiber";
import { Html, OrbitControls, Sky, Stars } from "@react-three/drei";

export default function About({setPage}) {
    
    function Image() {
        const texture2 = useLoader(THREE.TextureLoader, avatar2)

        return (
          <mesh>
            <boxBufferGeometry args={[3, 3, 3]} attach="geometry" />
            <meshBasicMaterial attach="material" map={texture2} />

          </mesh>
        )
      }
    
    return (
        <div className = "About3D">
            <div className = "About3D-Content">
            <h2>About<span> Me </span></h2>
            <Canvas colorManagement>
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.8} position={[300, 300, 400]} />
                <OrbitControls />
                {/* <Stars /> */}
                <Sky
                distance={450000}
        sunPosition={[0, 1, 0]} 
        inclination={0} 
        azimuth={0.25}  />
                <Suspense fallback={null}>
                <Image />
                </Suspense>
            </Canvas>,
            {/* <Canvas style = {{height: "300px"}}>
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.8} position={[300, 300, 400]} />
                <OrbitControls />
                <group>
                <Html>
                <div className = "avatar2">
                    <img src = {avatar2}></img>
                </div>
                </Html>
                </group>
            </Canvas> */}
            
            <p>Commodo incididunt cillum excepteur excepteur est laboris pariatur deserunt. Aute et magna reprehenderit deserunt culpa consequat nostrud do cupidatat elit laborum dolor nisi. Dolor reprehenderit aute cupidatat exercitation pariatur consectetur minim dolor aliqua Lorem id id nisi. Dolor labore sit elit ullamco ipsum ex. Elit ullamco elit ullamco sint nostrud anim cillum amet fugiat nisi. Eiusmod eu ullamco cillum fugiat laboris minim. Adipisicing proident occaecat deserunt cillum ipsum nisi amet sint.</p>

            <button  onClick = {() => setPage({"about": false})}>Close</button>

            </div>

           
        </div>
    )
}
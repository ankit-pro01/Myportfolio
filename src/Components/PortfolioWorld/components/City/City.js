import React from "react"
import { useLoader } from "react-three-fiber"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {usePlane } from "use-cannon"

import Customcity from "../../../../assets/3DAssets/city.glb";


export default function City(props){
    const city = useLoader(GLTFLoader, Customcity)
    
    city.scene.scale.set(30,30,30)

    return <mesh >
              <primitive object={city.scene} dispose={false} position={[0, 3.08, -12] }/>
            </mesh>

}
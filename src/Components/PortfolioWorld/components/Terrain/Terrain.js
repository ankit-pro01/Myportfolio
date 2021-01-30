import React  from 'react'
import {usePlane } from "use-cannon"


export default function Terrain(props) {

  const [ref, api] = usePlane(() => ({ rotation : [-Math.PI/2, 0, 0]})) 

    return (
      <mesh ref = {ref} position= {[0,0,0]} >
        <planeBufferGeometry attach="geometry" args={[1000,1000]} />
        <meshStandardMaterial attach="material"  opacity={1} color = "green" />
      </mesh>
    )
  }
  
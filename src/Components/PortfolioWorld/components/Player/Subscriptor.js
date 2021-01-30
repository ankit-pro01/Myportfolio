import { useState, useEffect} from "react"
import { useFrame } from "react-three-fiber";
import * as THREE from "three"

import {
    useStore,
    stickSelector,
}

from "../../Store/Store";



export default function useSubscriptor(player){
  
    const [stick] = useState({ x: 0, y: 0, z: 0})
  
    useEffect(
      () =>
        useStore.subscribe(({ x, y, z }) => {
          stick.x = x
          stick.y = y
          stick.z = z
        }, stickSelector),
      [stick]
    )
  
    useFrame((_, deltaTime) => {
  
      let moveDistance = 2 * deltaTime; // 200 pixels per second
      let rotateAngle = Math.PI / 2 * deltaTime;   // pi/2 radians (90 degrees) per second
  
      let relativeCameraOffset = new THREE.Vector3(-4,5,-6);
  
      
      if(stick.x == 1){
        player.current.translateZ(moveDistance)
      }
  
      if(stick.y == 1){
        player.current.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
      }
  
      if(stick.y == 2){
        player.current.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
      }
  
      if(stick.z == 1){
        player.current.translateZ(-moveDistance)
  
      }
  
      if(player.current.action == "Dance"){
        relativeCameraOffset = new THREE.Vector3(0,1.5,3);  
      }

    
        let cameraOffset = relativeCameraOffset.applyMatrix4( player.current.matrixWorld );
  
        _.camera.position.x = cameraOffset.x;
        _.camera.position.y = cameraOffset.y;
        _.camera.position.z = cameraOffset.z;
        _.camera.lookAt( player.current.position );
  
  
    })
  }
  
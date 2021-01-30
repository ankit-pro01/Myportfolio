import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame, useThree  } from 'react-three-fiber'
import { Vector3 } from 'three'
import create from 'zustand'


import {OrbitControls, PerspectiveCamera, Sky} from "@react-three/drei"

import * as THREE from "three"


import  { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"


import { isPressed } from './components/KeyPress'
import Terrain from "./components/Terrain";
import House from "./components/House";

import Camera from "./components/Camera";

import Idle from "../../assets/model_animations/Standing Idle.fbx"
import Running from "../../assets/model_animations/Running_Copy.fbx"
import Backwards from "../../assets/model_animations/Walking Backwards.fbx"

import Waving from "../../assets/model_animations/Waving.fbx";
import { Physics } from 'use-cannon'

import dances from "./components/DanceAnimation" 
import Environment from './components/Environment'


console.log("dances : ", dances)

const total_fences = [1,2,3,4,5,6,7]


const useStore = create((set) => ({
  x: 0,
  y: 0,
  z : 0,
  api: {
    setStick: (x, y, z) => set({ x, y, z})
  }
}))


const stickSelector = ({ x, y , z}) => ({ x, y , z})
const apiSelector = ({ api }) => api

const useActionStore = create((set) => ({
  action : "Idle",
  apiaction : {
    setAction : (action) => set({action})
  }
}))

const actionSelector = ({action}) => ({action})
const actionApi = ({apiaction}) => apiaction


const Actions = {
  Idle : Idle,
  Running : Running,
  Waving : Waving,
  Backwards : Backwards,
  Dance : Waving
}

const ModelLoader = (setMyAction) => {

  const [model_action] = useState({name : "Idle"})




  useEffect(
    () =>
      useActionStore.subscribe(({action}) => {
        model_action.name = action 
      }, actionSelector),
    [model_action.name]
  )

  useFrame(() => {
    setMyAction(model_action.name)
  })

  return null
 }



const Model = (props) => {

  const playerRef = useRef()
  
  ModelLoader(props.setMyAction)

  const object = useLoader(FBXLoader, Actions["Idle"]);

  let current_acton =  Actions[props.action]

  if(props.action == "Dance"){

    const randomDance = dances[Math.floor(Math.random() * dances.length)];
    console.log(randomDance.default)
    current_acton = randomDance.default
  }


  const anim = useLoader(FBXLoader, current_acton);
  
  if (anim.animations.length) {
      var mixer = new THREE.AnimationMixer(object);
      anim.animations.forEach(clip => {
          let action = mixer.clipAction(clip)
          action.play();
      });
  }

  useFrame((state, delta) => {
      mixer?.update(delta)
  })


  return(
    <group ref = {playerRef}>
      <primitive object={object} dispose={false} position={[0, 0, 0] }/>
    </group>) 
}



const Cube = ({action, setMyAction}) => {
  const ref = useRef()
  const player = useRef()

  useSubscriptionRotator(ref, player, { speed: 3 })

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <group ref = {player} action = {action} position={[0, 0, 0]}>
        <Suspense fallback = {null}>{<Model action = {action} setMyAction = {setMyAction}/>}</Suspense>
      </group>
    </group>

  )
}


const JoystickInput = () => {
  const stick = new Vector3()

  const { setStick } = useStore(apiSelector)

  const { setAction } = useActionStore(actionApi)

  const action = {name : "Idle"}

  useFrame(() => {
    stick.x = 0
    stick.y = 0
    stick.z = 0
    action.name = "Idle";
    
    if (isPressed('up') || isPressed('w')) {stick.x = 1 ; action.name = "Running"}
    if (isPressed('down') || isPressed('s')) {stick.z = 1 ; action.name = "Backwards"}
    if (isPressed('left') || isPressed('a')) { stick.y = 1 ;action.name = "Running"}
    if (isPressed('right') || isPressed('d')) {stick.y = 2 ; action.name = "Running"}
    if (isPressed('space'))  action.name = "Dance"


    setStick(stick.x, stick.y, stick.z)
    setAction(action.name)
  })

  return null
}



const useSubscriptionRotator = (ref,player, { speed }) => {

  console.log(player)

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

    let rotation_matrix = new THREE.Matrix4().identity();
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
      relativeCameraOffset = new THREE.Vector3(0,1,2);

    }


	  let cameraOffset = relativeCameraOffset.applyMatrix4( player.current.matrixWorld );

	  _.camera.position.x = cameraOffset.x;
	  _.camera.position.y = cameraOffset.y;
  	_.camera.position.z = cameraOffset.z;
	  _.camera.lookAt( player.current.position );

    // ref.current.position.x += stick.x * speed * deltaTime
    // ref.current.position.z += stick.z * speed * deltaTime

    // _.camera.lookAt(ref.current.position)

  })
}


export default function World() {

  const [myacton, setMyAction] = useState("Idle")


  return (
    <>
    <Canvas style={{ background: "white", width: "100%", height: "100vh"}}  >
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
      <Physics>
        <Suspense fallback = {null}>{<Environment />}</Suspense>
        <House />
          <Suspense fallback = {null}>{<House /> }</Suspense>
          <Cube action = {myacton} setMyAction = {setMyAction}/>
          <Terrain />
      </Physics>

    </Canvas>  
  </>
  )
} 
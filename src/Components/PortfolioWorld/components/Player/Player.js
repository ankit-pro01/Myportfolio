import React, { Suspense, useEffect, useRef, useState } from "react"
import { actionSelector, useActionStore } from "../../Store/Store";
import useSubscriptor from "./Subscriptor";
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";


import dances from "../../Animations/useFetchDances";
import running from "../../../../assets/Animations/running.fbx";
import backwards from "../../../../assets/Animations/backwards.fbx"
import waving from "../../../../assets/Animations/waving.fbx"
import idle from "../../../../assets/Animations/idle.fbx";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useSphere } from "use-cannon";




const Actions = {
    Idle : idle,
    Running : running,
    Waving : waving,
    Backwards : backwards,
    Dance : waving
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

    console.log("inside Model", props)
    
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
  
 
export default function Player({action, setMyAction}) {
    const player = useRef()
    useSubscriptor(player)
    
    return(
        <group>
        <group ref = {player} position={[20, 0, 4]} action = {action}>
          <Suspense fallback = {null}>{<Model action = {action} setMyAction = {setMyAction}/>}</Suspense>
        </group>
      </group>
    )

  }
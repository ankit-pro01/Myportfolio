import { useFrame } from "react-three-fiber";
import { Vector3 } from "three";
import {
    useStore,
    stickSelector,
    apiSelector,
    useActionStore,
    actionSelector,
    actionApi
}

from "../Store/Store";

import {isPressed} from "./KeyPress";




export default function JoystickInput(){
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
import React, {useRef, useState }  from 'react'
import * as THREE from "three";
import Roboto from "../../TextLoader/Roboto2.json"

export default function Star(props) {

  const {name,x,y,z, rotation} = props.position;

  const name_lower = name.toLowerCase()

  const mesh = useRef();

  const [active, setActive] = useState(false);

  const font = new THREE.FontLoader().parse(Roboto);


  // configure font geometry
  const textOptions = {
    font,
    size: 0.5,
    height: 0.5,
    color : "orange"
  };

  console.log(props.setPage);


  const handleClick = ()=> {
    if(name_lower === "about") props.setPage({"about" : true});
    if(name_lower === "skills") props.setPage({"skills" : true});
    if(name_lower === "contact") props.setPage({"contact" : true})

  }

  
  return (
    <group>
      <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      onClick={(e) => handleClick()}
      position = {[x,y,z]}
      rotation = {rotation}>
        <textGeometry attach='geometry' args={[name, textOptions]} />
        <meshStandardMaterial attach='material' color = "orange"/>
      </mesh>

      
        {/* <mesh
            {...props}
            ref={mesh}
            scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
            onClick={(e) => console.log("im inside starclicked")}
            position = {[x,y,z]}
            >
          <boxBufferGeometry args={[0.2, 0.2, 0.2]} attach="geometry" />
          <meshPhongMaterial color="yellow" attach="material" />
        </mesh> */}
    </group>      
      
          
  );
    
  }
  
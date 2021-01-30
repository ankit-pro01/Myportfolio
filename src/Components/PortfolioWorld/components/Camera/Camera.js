import { PerspectiveCamera } from "@react-three/drei"
import React, { useEffect, useRef } from 'react'
import { useFrame, useThree  } from 'react-three-fiber'




export default function Camera(props) {
    const ref = useRef()
    const { setDefaultCamera } = useThree()
    // Make the camera known to the system
    useEffect(() => void setDefaultCamera(ref.current), [])
    // Update it every frame
    useFrame(() => ref.current.updateMatrixWorld())
    return <PerspectiveCamera ref={ref} {...props} />
  }
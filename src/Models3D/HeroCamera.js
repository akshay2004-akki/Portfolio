import React, { useRef } from 'react'
import {easing} from 'maath';
import { useFrame } from '@react-three/fiber';

const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef()

    useFrame((state, delta)=>{
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);
        if(!isMobile){
            easing.damp3(groupRef.current.rotation, [-state.pointer.y/3, -state.pointer.x/3, 0], 0.25, delta)
        }
    })


  return (
    <group ref={groupRef}>
        {children}
    </group>
  )
}

export default HeroCamera
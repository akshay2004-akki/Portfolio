import React, { Suspense } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import HackerRoom  from '../Models3D/HackerRoom.js'
import CanvasLoader from '../Models3D/CanvasLoader.js'

export const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Akshay <span className='waving-hand'>👋</span> </p>
            <p className='hero_tag text-gray_gradient text-wrap'> Building Products & Transforming Lives</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-full h-full'>

                <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0,0,30]}/>

                <HackerRoom/>
                </Suspense>
            </Canvas>   
        </div>
    </section>
  )
}

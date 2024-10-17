import React from 'react'

export const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Akshay <span className='waving-hand'>👋</span> </p>
            <p className='hero_tag text-grey_gradient'> Building Products & Transforming Lives</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            
        </div>
    </section>
  )
}

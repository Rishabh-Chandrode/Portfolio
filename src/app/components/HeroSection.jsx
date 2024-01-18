"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left ' >

          <h1 className='text-white mb-4 text-4xl  sm:text-4xl lg:text-6xl font-extrabold' >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ' >Hello, I&apos;m </span>
            <br/>
            <span>Rishabh Chandrode</span>
            <br/>
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1000, 
                'Competitive Coder',
                1000,
                'Full Stack developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base  sm:text-lg  lg:text-xl mb-6  ' >
           
            </p>
          <div>
            <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-r from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3 ' >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' >Download CV</span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center ' >
          <div className='rounded-full bg-[#181818] mt-9 lg:mt-0 w-[250px] h-[340px] lg:w-[400px] lg:h-[400px] relative' >

            <Image
              src="/images/IntroImg.png"
              alt='Intro Image'
              className='absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
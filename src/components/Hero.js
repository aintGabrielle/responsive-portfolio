import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <>
    <section className='w-full h-screen'>
        <div className='w-[80%] h-screen mx-auto flex flex-col items-center'>
            <div className='w-full h-fit flex flex-col items-center py-12 mt-32'>
                <p className='poppins text-2xl sm:text-5xl'>Isaac Gabrielle Domino</p>
                <Typed className='text-2xl' strings={['Front-end', 'Back-end', 'UI/UX']} typeSpeed={120} backSpeed={50} loop/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
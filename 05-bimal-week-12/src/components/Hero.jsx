import React from 'react'
import bimalImage from '../images/bimal.png'

function Hero() {
  return (
    <section className='bg-zinc-500 mx-auto max-w-7xl mt-10'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-extrabold tracking-tighter'>
                <span className='text-orange-950'>Bolo Zubaan</span> <span className='text-orange-50'>Canceri</span>
            </h1>

            <div className='text-xl text-orange-950'>
                More you eats, sooner you dies
            </div>

            <img 
                src={bimalImage}
                className='w-[40%] h-full '
                alt="ajay-devgan" 
                width={500}
                height={500}
            />
        </div>
    </section>
  )
}

export default Hero
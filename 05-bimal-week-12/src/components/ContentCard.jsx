import bimalPacket from '../images/bimal-packet.png'

import React from 'react'

function ContentCard() {
  return (
    <div className='text-black bg-orange-100 flex flex-col items-center p-5 lg:flex-row lg:p-6 rounded-3xl mb-6 '>

       <div className='h-[300px] w-[280px] md:h-[270px] md:w-[310px] object-cover'>
        <img 
                src={bimalPacket}
                alt="bimal-packet" 
                className='w-full h-full'
            />
       </div>

       <div className='flex flex-col gap-8 '>
            <div className='flex flex-col'>
                <h1 className='font-bold text-xl lg:text-2xl'>
                    <span className='text-orange-600'>bimal</span> <span className='text-orange-950'>Elaichi</span>
                </h1>
                <div className='lg:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet enim nec orci lacinia pellentesque.
                </div>
            </div>

            <div className='flex gap-2'>
                <button className='bg-orange-600 text-orange-50 px-4 py-1 rounded-xl hover:bg-orange-700'>Die Now</button>
                <button className='bg-orange-50 text-orange-950 px-4 py-1 rounded-xl hover:text-orange-900'>Die Later</button>
            </div>
       </div>

    </div>
  )
}

export default ContentCard
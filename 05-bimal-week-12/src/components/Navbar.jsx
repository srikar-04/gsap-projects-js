import React from 'react'

function Navbar() {
  return (
    <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center bg-white'>
        <a href="/">
            <h1 className='text-[#e15315] text-2xl tracking-tighter font-extrabold'>
                bimal
            </h1>
        </a>

        <div className='flex items-center justify-between  gap-5 '>
            <a href="" className='text-orange-950 tracking-tight hover:text-orange-900 transition-all duration-300 font-medium'>
                Products
            </a>
            <button className='bg-orange-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300'>
                Login
            </button>
        </div>
    </nav>
  )
}

export default Navbar
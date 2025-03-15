import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-2xl text-orange-500'>Bolo Zubaan Kesari</div>
      <Navbar />
      <Hero />
    </>
  )
}

export default App

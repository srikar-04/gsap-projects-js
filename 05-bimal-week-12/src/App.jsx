import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </main>
  )
}

export default App

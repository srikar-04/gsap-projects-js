import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='container mb-14'>
        <h1 className='text-4xl text-blue-700 mb-6'>:focus :outline :hover :active</h1>
          <button className='bg-white px-4 py-2 rounded-lg hover:text-blue-500 text-black focus:outline focus:outline-offset-2 focus:outline-yellow-500 active:bg-red-500 active:text-white'>UI Masterclass</button>
      </main>

      <main>
        <h1>hello world</h1>
      </main>
    </>
  )
}

export default App

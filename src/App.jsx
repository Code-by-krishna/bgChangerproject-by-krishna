import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './images/krishna1.jpeg'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className='w-full h-screen duration-400' style={{backgroundColor: color}}>
        <div className='flex flex-wrep justify-center bottom-12 inset-x-0 px-1'>
          <div className='flex flex-wrep justify-center gap-3 px-3 py-3 shadow-lg  rounded-3xl bg-white-400' >
          <button style={{backgroundColor:color}} className='outline-none bg-yellow-300 rounded-full shadow-lg px-4 py-1 text-white font-bold' onClick={() => setColor("red")}>Red</button>
          <button style={{backgroundColor:color}} className='outline-none bg-yellow-300 rounded-full shadow-lg px-4 py-1 text-white font-bold' onClick={() => setColor("orange")}>Orange</button>
          <button style={{backgroundColor:color}} className='outline-none bg-yellow-300 rounded-full shadow-lg px-4 py-1 text-white font-bold ' onClick={() => setColor("black")}>Black</button>
          <button style={{backgroundColor:color}} className='outline-none bg-yellow-300 rounded-full shadow-lg px-4 py-1 text-white font-bold' onClick={() => setColor("olive")}>Olive</button>
          <button style={{backgroundColor:color}} className='outline-none bg-yellow-300 rounded-full shadow-lg px-4 py-1 text-white font-bold' onClick={() => setColor("violet")}>Violet</button>
          <button style={{backgroundColor:color}} className='outline-none bg-yellow-300 rounded-full shadow-lg px-4 py-1 text-white font-bold' onClick={() => setColor("brown")}>Brown</button>
          </div>
        </div>
        <div >
          <img 
          className="mx-auto  rounded-3xl " 
          src={img1} 
          alt='Krishnapic' 
           />
        </div>
      </div>
    </>
  )
}

export default App

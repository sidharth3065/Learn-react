import { useState } from 'react'
import './App.css'
import card from './Components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <card/> 
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Randomcolor from './RandomColor/RandomColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Randomcolor/>
       </div>
    </>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        SAROJ KHATIWADA
      </h1>
  <Card/>
    </>
  )
}

export default App
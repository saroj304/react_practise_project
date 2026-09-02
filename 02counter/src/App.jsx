import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const decrement = () => {
    setCounter(prev => prev - 1);
  };
  return (
    <>  
    <h1> SAROJ KHATIWADA </h1>
    <h2>Counter value : {counter} </h2>
    <button onClick={increment}>Add value</button>
    <button onClick={decrement}>remove value</button>
    </>
  )
}

export default App

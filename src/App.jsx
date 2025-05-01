import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const lotteryNumbers = () => {
    setCount(Math.floor(Math.random() * 900) + 100);
    }
  return (
    <>
    <h1>Lottery No</h1>
    {count != 333 ? (
      <h2>{count}</h2>
    ) : (
      <>
        <h2>you won</h2>
        <h3>{count}</h3>
      </>
    )}
    <h2>Click the button to generate a random number</h2>
    <button onClick={lotteryNumbers}>
      Generate
    </button>
    </>
  );
}

export default App

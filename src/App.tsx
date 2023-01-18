import React, { useState, useEffect } from 'react'
import Walk from './Walk'
import './App.css'

function App() {
  const [timer, setTimer] = useState(120)
  const [speed, setSpeed] = useState(5)

  const updateTimer = (timer: number) => {
    setTimer(timer)
  }

  const updateSpeed = (speed: number) => {
    setSpeed(speed)
  }

  console.log('RENDER App')

  useEffect(() => {
    if (speed < 4 && timer > 0) {
      setTimeout(() => {
        setTimer((prevTimer: number) => {
          const newTimer = (prevTimer - 0.1).toFixed(1)
          return parseFloat(newTimer)
        })
      }, 100)
    }
  })

  return (
    <div className="App">
      <Walk
        speed={speed}
        timer={timer}
        updateTimer={updateTimer}
        updateSpeed={updateSpeed}
      />
    </div>
  )
}

export default App

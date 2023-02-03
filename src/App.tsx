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

  let timeoutId: number | undefined = undefined

  useEffect(() => {
    if (speed < 4 && timer > 0) {
      clearTimeout(timeoutId)
      timeoutId = undefined
      console.log(timeoutId)
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setTimer((prevTimer: number) => {
            const newTimer = (prevTimer - 0.1).toFixed(1)
            return parseFloat(newTimer)
          })
        }, 100)
      }
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = undefined
      }
    }
  }, [speed, timer])

  return (
    <div className="App">
      <h1>The Long Walk</h1>
      <h2>Warning/Ticket/Timer Simulator</h2>
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

import React, { useState, useEffect } from 'react'
import Walk from './Walk'
import './App.css'

function App() {
  const [timer, setTimer] = useState(120)
  const [speed, setSpeed] = useState(50)
  const [timeoutId, setTimeoutId] = useState(-1)

  const updateTimer = (timer: number) => {
    setTimer(timer)
  }

  const updateSpeed = (speed: number) => {
    setSpeed(speed)
  }

  //console.log('RENDER App')

  useEffect(() => {
    // slider's range is 0 to 100 so it slides smoothly
    // but we divide the speed by 10 when displaying it for actual mph
    // for example 4.3 mph would be 43 on the slider.
    // 40 = 4 mph
    if (speed < 40 && timer > 0) {
      clearTimeout(timeoutId)
      console.log(`timeoutId = ${timeoutId}`)
      if (timeoutId === -1) {
        setTimeoutId(
          setTimeout(() => {
            setTimer((prevTimer: number) => {
              const newTimer = (prevTimer - 0.1).toFixed(1)
              return parseFloat(newTimer)
            })
          }, 100),
        )
      }
    } else {
      console.log('clearing timeout')
      if (timeoutId) {
        clearTimeout(timeoutId)
        setTimeoutId(-1)
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

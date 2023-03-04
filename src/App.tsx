import React, { useEffect, useState, useRef } from 'react'
import Walk from './Walk'
import './App.css'

function App() {
  const [timer, setTimer] = useState(120)
  const [speed, setSpeed] = useState(50)
  const timeoutId = useRef(-1)

  const updateTimer = (timer: number) => {
    setTimer(timer)
  }

  const updateSpeed = (speed: number) => {
    setSpeed(speed)
  }

  useEffect(() => {
    // slider's range is 0 to 100 so it slides smoothly
    // but we divide the speed by 10 when displaying it for actual mph
    // for example 4.3 mph would be 43 on the slider.
    // 40 = 4 mph
    if (speed < 40) {
      if (timer <= 0) {
        clearInterval(timeoutId.current)
        setTimer(0)
        timeoutId.current = -1
      } else if (timeoutId.current === -1) {
        // if interval not set, then set interval
        const id = setInterval(() => {
          setTimer((prevTimer: number) => {
            const newTimer = (prevTimer - 0.1).toFixed(1)
            return parseFloat(newTimer)
          })
        }, 100)
        timeoutId.current = id
      }
    } else if (speed >= 40) {
      // if speed is 40 or more, stop the timer
      if (timeoutId.current !== -1) {
        clearInterval(timeoutId.current)
        timeoutId.current = -1
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

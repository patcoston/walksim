import React, { useState, useEffect } from 'react'
import './Walk.css'

interface Props {}

const Walk: React.FC<Props> = () => {
  const [timer, setTimer] = useState(120)
  const [speed, setSpeed] = useState(5)
  const [warnings, setWarnings] = useState(0)
  const [ticket, setTicket] = useState(false)

  useEffect(() => {
    if (speed < 4) {
      setTimeout(() => {
        setTimer((prevTimer: number) => {
          let newTimer = (prevTimer - 0.1).toFixed(1)
          return parseFloat(newTimer)
        })
      }, 100)
    }
  })

  useEffect(() => {
    console.log(
      Math.random(),
      speed,
      timer,
      timer === 0,
      timer === 30,
      timer === 60,
      timer === 90,
    )
    if (timer === 0) {
      setTicket(true)
      setTimer(0)
    } else if (timer === 30) {
      setWarnings(3)
    } else if (timer === 60) {
      setWarnings(2)
    } else if (timer === 90) {
      setWarnings(1)
    } else if (timer === 120) {
      setWarnings(0)
    }
  }, [timer])

  const loseWarning = () => {
    setTicket(false)
    if (timer > 60) {
      setTimer(120) // lose warning 1 so 0 warnings
    } else if (timer > 30) {
      setTimer(90) // lose warning 2 so 1 warning
    } else {
      setTimer(60) // lose warning 3 so 2 warnings
    }
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(parseFloat(e.target.value))
  }

  const penaltyWarning = () => {
    if (timer > 90) {
      setTimer(90)
    } else if (timer > 60) {
      setTimer(60)
    } else if (timer > 30) {
      setTimer(30)
    } else {
      setTimer(0)
      setTicket(true)
    }
  }

  return (
    <div>
      <h1>The Long Walk</h1>
      <h2>Warning/Ticket/Timer Simulator</h2>
      <div id="labels">
        <div>Timer: {`${timer.toFixed(1)}`}</div>
        <div>Warnings: {warnings}</div>
        <div>Speed: {speed}</div>
        <div>Ticket: {ticket ? 'Yes' : 'No'}</div>
      </div>
      <div id="slider">
        <label htmlFor="walking-speed">WALKING SPEED</label>
        <input
          type="range"
          min={0}
          max={10}
          value={speed}
          onChange={handleSliderChange}
          id="walking-speed"
        />
      </div>
      <div id="buttons">
        <button onClick={penaltyWarning}>Penalty Warning</button>
        <button onClick={loseWarning}>Lose Warning</button>
      </div>
      <div id="description">
        Timer counts down when a walker's speed in the correct direction drops
        under 4 mph.
        <br />
        <br />
        <strong>Warnings and Tickets:</strong>
        <ul>
          <li>First warning when timer counts down to 90</li>
          <li>Second warning when timer counts down to 60</li>
          <li>Third warning when timer counts down to 30</li>
          <li>Ticket when timer counts down to 0</li>
          <li>
            Penalty Warning given for breaking the rules like interference with
            another walker
          </li>
          <li>
            A Penalty Warning causes the timer to drop to next warning threshold
            or ticket.
            <ul>
              <li>90 for first warning</li>
              <li>60 for second warning</li>
              <li>30 for third warning</li>
              <li>0 for ticket</li>
            </ul>
          </li>
          <li>
            Walkers lose a warning for every hour they don't get a warning
          </li>
          <li>
            Losing a warning causes the timer to rise to next warning threshold
            <ul>
              <li>Losing 3rd warning timer resets to 60 and 2 warnings</li>
              <li>Losing 2nd warning timer resets to 90 and 1 warning</li>
              <li>Losing 1st warning timer resets to 120 and 0 warnings</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Walk

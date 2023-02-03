import React, { useState, useEffect } from 'react'
import './Walk.css'

type NumberFunction = (n: number) => void

interface WalkProps {
  speed: number
  timer: number
  updateTimer: NumberFunction
  updateSpeed: NumberFunction
}

const Walk = (props: WalkProps) => {
  const [warnings, setWarnings] = useState(0)
  const [ticket, setTicket] = useState(false)
  const { speed, timer, updateTimer, updateSpeed } = props

  console.log('RENDER Walk')

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
      updateTimer(120) // lose warning 1 so 0 warnings
    } else if (timer > 30) {
      updateTimer(90) // lose warning 2 so 1 warning
    } else {
      updateTimer(60) // lose warning 3 so 2 warnings
    }
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSpeed(parseFloat(e.target.value))
  }

  const penaltyWarning = () => {
    if (timer > 90) {
      updateTimer(90)
    } else if (timer > 60) {
      updateTimer(60)
    } else if (timer > 30) {
      updateTimer(30)
    } else {
      updateTimer(0)
      setTicket(true)
    }
  }

  return (
    <div>
      <div id="labels">
        <div>Timer: {`${timer}`}</div>
        <div>Warnings: {warnings}</div>
        <div>Speed: {speed / 10}</div>
        <div>Ticket: {ticket ? 'Yes' : 'No'}</div>
      </div>
      <div id="slider">
        <label htmlFor="walking-speed">WALKING SPEED</label>
        <input
          type="range"
          min={0}
          max={100}
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

import { useState } from 'react'
import '../styles/timer.scss'

type timerTypes = {
  min: number;
  sec: number;
}

export function Timer () {
  const [ selectedTimer, setSelectedTimer ] = useState(1);
  const [ paused , pauseTimer ] = useState(true);
  
  const [ time ] = useState({ min: 25, sec: 0} as timerTypes);

  let date = 0;

  function handleSetTimeTo (minutes: number) {
    if (minutes === 25) setSelectedTimer(1)
    if (minutes === 5) setSelectedTimer(2)
    if (minutes === 15) setSelectedTimer(3)
  }

  function handleStartTimer() {
    paused ? pauseTimer(false) : pauseTimer(true);
  }
  
  return (
    <main>
      <div className="container">
        <div className="buttons">
          <button 
            id="pomodoroBtn" className={`btn ${selectedTimer === 1 && 'selected'}`}
            onClick={ () => handleSetTimeTo(25) }
          >
            Pomodoro
          </button>
          <button 
            id="shortBreackBtn" className={`btn ${selectedTimer === 2 && 'selected'}`}
            onClick={ () => handleSetTimeTo(5) }
          >
            Short break
          </button>
          <button 
            id="longBreakBtn" className={`btn ${selectedTimer === 3 && 'selected'}`}
            onClick={ () => handleSetTimeTo(15) }
          >
            Long break
          </button> 
        </div>

        <div className="timer">
          <h3>{time.min < 10 ? `0${time.min}` : time.min}:{time.sec < 10 ? `0${time.sec}` : time.sec}</h3>
          <button onClick={ handleStartTimer }>{ paused ? 'START' : 'STOP' }</button>
        </div>

      </div>

    </main>
  )
}
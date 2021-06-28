import { useState } from "react";
import '../styles/timer.scss'

export function Timer () {
  
  const [ selectedTimer, setSelectedTimer ] = useState(1);
  const [ paused , pauseTimer ] = useState(true);
  
  const [ min, setMin ] = useState(25);
  const [ sec, setSec ] = useState(0);
  
  function handleSetTimeTo (selected: number) {
    pauseTimer(true);

    setSelectedTimer(selected);
    
    if (selected === 1) setMin(25);
    if (selected === 2) setMin(5);
    if (selected === 3) setMin(15);
    
    setSec(0);
  }

  const displayMinutes = min > 9 ? min : `0${min}`
  const displaySeconds = sec > 9 ? sec : `0${sec}`

  return (
    <main>
      <div className="container">
        <div className="buttons">
          <button 
            id="pomodoroBtn" className={`btn ${selectedTimer === 1 && 'selected'}`}
            onClick={ () => handleSetTimeTo(1) }
          >
            Pomodoro
          </button>
          <button 
            id="shortBreackBtn" className={`btn ${selectedTimer === 2 && 'selected'}`}
            onClick={ () => handleSetTimeTo(2) }
          >
            Short break
          </button>
          <button 
            id="longBreakBtn" className={`btn ${selectedTimer === 3 && 'selected'}`}
            onClick={ () => handleSetTimeTo(3) }
          >
            Long break
          </button> 
        </div>

        <div className="timer">
          <h3>{displayMinutes}:{displaySeconds}</h3>
          <button onClick={ () => pauseTimer(!paused) }>{ paused ? 'START' : 'STOP' }</button>
        </div>

      </div>

    </main>
  )
}
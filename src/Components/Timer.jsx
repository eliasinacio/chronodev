import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import '../styles/timer.scss'

const timerTypes = {
  NORMAL: 'NORMAL',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK'
}

export function Timer () {
  
  const [ selectedTimer, setSelectedTimer ] = useState(timerTypes.NORMAL);
  const [ paused , pauseTimer ] = useState(true);
  const [ change, changeNow ] = useState(false);
  const [ currentCycle, changeCycle ] = useState(0);
  const [ min, setMin ] = useState(25);
  const [ sec, setSec ] = useState(0);

  const [ modalInfo, setModalInfo ] = useState({visible: false, title:'Good Job', body:'Now we have a shrot break for a coffee :)'});
  
  function setMinutes (timerType) {
    
    setSelectedTimer(timerType);
    
    if (timerType === timerTypes.NORMAL) setMin(25);
    if (timerType === timerTypes.SHORT_BREAK) setMin(5);
    if (timerType === timerTypes.LONG_BREAK) setMin(15);
  }
  
  const setTimerType = (type) => {
    if (selectedTimer !== type) {
      pauseTimer(true);
      changeNow(true);
      setMinutes(type);
    }
  }
  
  const alternateCycles = () => {
    if (currentCycle < 2) {
      if (selectedTimer === timerTypes.NORMAL) {
        setModalInfo({...modalInfo, visible: true})
        setTimerType(timerTypes.SHORT_BREAK);
      } else {
        setModalInfo({...modalInfo, visible: true})
        setTimerType(timerTypes.NORMAL);
        changeCycle(currentCycle+1);
      }
    } else {
      setModalInfo({...modalInfo, visible: true})
      setTimerType(timerTypes.LONG_BREAK);
      changeCycle(0);
    }
  }

  const displayMinutes = min > 9 ? min : `0${min}`
  const displaySeconds = sec > 9 ? sec : `0${sec}`

  useEffect(() => {
    if (!paused) {
      document.title = `${displayMinutes}:${displaySeconds} - Don't stop!`
      var interval = setInterval( ()=>{
        if (sec === 0) {
          if (min === 0) {
            pauseTimer(true);
            alternateCycles();
            clearInterval(interval);
            return;
          }
          setSec(59);
          setMin(min-1);
        } else {
          setSec(sec-1);
        }  
      }, 1000);
    } else {
      document.title = 'Chronodev'
      if (change) {
        setSec(0);
        changeNow(false);
      }
    }    

    return () => {
      clearInterval(interval);
    }
  // eslint-disable-next-line
  }, [paused, min, sec]);
  
  return (
    <main>
      { modalInfo.visible ? <Modal modalInfo={ {modalInfo, setModalInfo} } /> : '' }
      <div className="container">
        <div className="buttons">
          <button 
            id="pomodoroBtn" className={`btn ${selectedTimer === timerTypes.NORMAL && 'selected'}`}
            onClick={ () => { if (selectedTimer === timerTypes.NORMAL || window.confirm('Você deseja mesmo cancelar o timer?')) { setTimerType(timerTypes.NORMAL) }}}>
            Pomodoro
          </button>
          <button 
            id="shortBreackBtn" className={`btn ${selectedTimer === timerTypes.SHORT_BREAK && 'selected'}`}
            onClick={ () => { if (selectedTimer === timerTypes.SHORT_BREAK || window.confirm('Você deseja mesmo cancelar o timer?')) { setTimerType(timerTypes.SHORT_BREAK) }}}>
            Short break
          </button>
          <button 
            id="longBreakBtn" className={`btn ${selectedTimer === timerTypes.LONG_BREAK && 'selected'}`}
            onClick={ () => { if (selectedTimer === timerTypes.LONG_BREAK || window.confirm('Você deseja mesmo cancelar o timer?')) { setTimerType(timerTypes.LONG_BREAK) }}}>
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
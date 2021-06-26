import '../styles/timer.scss'

export function Timer () {
  return (
    <main>
      
      <div className="container">
        <div className="buttons">
          <div id="pomodoroBtn" className="btn pomodoroBtn"></div>
          <div id="shortBreackBtn" className="btn shortBreackBtn"></div>
          <div id="longBreakBtn" className="btn longBreakBtn"></div> 
        </div>

        <div className="timer">
          aqui vai ficar o timer
        </div>

      </div>

    </main>
  )
}
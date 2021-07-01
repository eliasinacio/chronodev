import { NewTask } from './NewTask'

import '../styles/task.scss'
import { useState } from 'react'

export function TaskManager () {
  const [ formIsHidden, setFormISHidden ] = useState(true);

  function hiddenForm () {
    setFormISHidden(!formIsHidden);
  }

  return (
    <section>
      <div className="tasks-header">
        <h4>Your Tasks</h4>
        <span>...</span>
      </div>

      <div className="addTask-button">
        <button 
          hidden={!formIsHidden}
          onClick={ () => setFormISHidden(false) }
        >
          + Add new Task
        </button>
      </div>
      
      { !formIsHidden && (<NewTask closeModal={ hiddenForm }/>) }

      <div className='tasks-list' hidden>
        <ul>
          <li>
            <label>
              <input type="checkbox" name="" id="" />
              <h4>First Task Test</h4>
              <p>Task description</p>
            </label>
          </li>
        </ul>
      </div>
    </section>
  )
}
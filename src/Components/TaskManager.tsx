import { NewTask } from './NewTask'

import '../styles/task.scss'

export function TaskManager () {

  return (
    <section>
      <div className="tasks-header">
        <h4>Your Tasks</h4>
        <span>...</span>
      </div>

      <div className="addTask-button">
        <button onClick={ () => <NewTask /> }>
          + Add new Task
        </button>
      </div>
        <NewTask />

      <div className='tasks-list'>
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
import { useState } from 'react'

import { NewTask } from './NewTask'
import { MenuIcon } from './MenuIcon'

import '../styles/task.scss'
import { TaskListItem } from './TaskListItem'

const tasksList = [
  {
    title: 'Finish this project',
    cycles: [1, 2],
    body: 'I need Fix all errors, finish the project, close the form modal...'
  }, {
    title: 'Init the store project',
    cycles: [1, 1],
    body: 'Organize and start planning all things of the project for the store "dos cara"'
  }, {
    title: 'Task de test man',
    cycles: [1, 4],
    body: 'Lorem ipsum dolor sit amet as riot focus fomi ofdet.'
  }
]

export function TaskManager () {
  const [ formIsHidden, setFormISHidden ] = useState(true);

  function hiddenForm () {
    setFormISHidden(!formIsHidden);
  }

  return (
    <section>
      <div className="tasks-header">
        <h4>Your Tasks</h4>
        <MenuIcon />
      </div>

      <div className="addTask-button">
        <button 
          hidden={!formIsHidden}
          onClick={ () => setFormISHidden(false) }
        >
          + Add new Task
        </button>
      </div>

      <div className='tasks-list'>
        <ul>
          { tasksList.map( (task, key) => {
            return (
              <TaskListItem 
                title={task.title}
                body={task.body}
                cycles={task.cycles}
                key={key}
                id={key}
              />
            )})}
        </ul>
      </div>

      { !formIsHidden && (<NewTask closeModal={ hiddenForm }/>) }

    </section>
  )
}
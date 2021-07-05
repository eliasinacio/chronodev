import { useState } from 'react'

import { NewTaskForm } from './NewTaskForm'

import '../styles/task.scss'
import { TaskListItem } from './TaskListItem'

import { useEffect } from 'react'

export function TaskManager () {
  const [ formIsHidden, setFormIsHidden ] = useState(true);

  const [ tasks, setTasks ]  = useState([]);

  useEffect( () => {
    setTasks(
      JSON.parse(localStorage.getItem('tasks'))
    )
  }, []);

  return (
      <section>
        <header className="tasks-header">
          <h4>Your Tasks</h4>
        </header>

        <div className="addTask-button">
          <button 
            hidden={!formIsHidden}
            onClick={ () => setFormIsHidden(false) }
          >
            + Add new Task
          </button>
        </div>

        <div className='tasks-list'>
          <ul>
            { tasks ? tasks.map((task, key) => {
                        return (
                          <TaskListItem 
                            title={task.title}
                            body={task.body}
                            cycles={task.cycles}
                            completed={task.completed}
                            key={key}
                            id={key}
                            updateTasks={{tasks, setTasks}}
                          />
                        )})
                    : <p>Não há tasks</p> 
              }    
          </ul>
        </div>

        { !formIsHidden && (<NewTaskForm 
                              closeModal={ () => setFormIsHidden(!formIsHidden) }
                              updateTasks={ {tasks, setTasks} }
                            />) }

      </section>
  )
}
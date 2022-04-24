import { useState, useEffect } from 'react'
import { NewTaskForm } from './NewTaskForm'
import { TaskListItem } from './TaskListItem'
import '../styles/task.scss'

export function TaskManager () {
  const [ formIsHidden, setFormIsHidden ] = useState(true);
  const [ tasks, setTasks ]  = useState([]);

  const getTasks = () => {
    setTasks(
      JSON.parse(localStorage.getItem('tasks'))
    )
  }

  useEffect(() => {
    getTasks()
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

        { !formIsHidden && (<NewTaskForm 
                              closeModal={ () => setFormIsHidden(!formIsHidden) }
                              updateTasks={ {tasks, setTasks} }
                            />) }

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
                            updateTasks={{tasks, setTasks, getTasks}}
                          />
                        )})
                    : <p>No tasks</p> 
              }    
          </ul>
        </div>
      </section>
  )
}

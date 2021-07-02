import { useState, useContext } from 'react'
import { TasksContext, TasksContextProvider } from '../contexts/TasksContext';

import { NewTaskForm } from './NewTaskForm'
import { MenuIcon } from './MenuIcon'

import '../styles/task.scss'
import { TaskListItem } from './TaskListItem'

export function TaskManager () {
  const [ formIsHidden, setFormIsHidden ] = useState(true);
  const value = useContext(TasksContext);
  const TasksList = value.tasks;

  return (
    <TasksContextProvider>
      <section>
        <header className="tasks-header">
          <h4>Your Tasks</h4>
          <MenuIcon />
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
            { 
              (TasksList) ? 
                TasksList.map( (task, key) => {
                  return (
                    <TaskListItem 
                      title={task.title}
                      body={task.body}
                      cycles={task.cycles}
                      id={key}
                    />
                  )
                }) : ''
            }
          </ul>
        </div>

        { !formIsHidden && (<NewTaskForm closeModal={ () => setFormIsHidden(!formIsHidden) }/>) }

      </section>
    </TasksContextProvider>
  )
}
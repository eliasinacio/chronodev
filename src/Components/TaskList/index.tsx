import { useState } from 'react'
import { useEffect } from 'react'

import { TaskItem } from '../TaskItem'
import { Form } from '../Form'
import { Container } from './styles';

export function TaskList () {
  const [ formIsHidden, setFormIsHidden ] = useState(true);

  const [ tasks, setTasks ]  = useState([]);

  useEffect( () => {
    setTasks(
      JSON.parse(localStorage.getItem('tasks') as any /** ATENÇÃO AQUI */)
    )
  }, []);

  return (
      <Container>
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
                          <TaskItem 
                            title={"task.title"}
                            body={"task.body"}
                            cycles={"task.cycles"}
                            completed={"task.completed"}
                            key={"key"}
                            id={"key"}
                            updateTasks={{tasks, setTasks}}
                          />
                        )})
                    : <p>0 tasks</p> 
              }    
          </ul>
        </div>

        { !formIsHidden && (<Form 
                              closeModal={ () => setFormIsHidden(!formIsHidden) }
                              updateTasks={ {tasks, setTasks} }
                            />) }

      </Container>
  )
}

import { useState, useEffect } from 'react';
import { Container } from './styles';

export function TaskItem (props: any /** ATENÇÃO AQUI */) {
  const { title, body, cycles, completed, id } = props;
  const [ taskBodyIsHidden, setTaskBodyIsHidden ] = useState(true);

  function handleDeleteTask (taskId: any /** ATENÇÃO AQUI */) {
    let totalTasks = props.updateTasks.tasks;
    totalTasks.splice(taskId, 1);
    window.localStorage.setItem('tasks', JSON.stringify(totalTasks));
    props.updateTasks.setTasks(totalTasks);
  }

  function handleCheckTask (taskId: any /** ATENÇÃO AQUI */) {
    let totalTasks = props.updateTasks.tasks;

    totalTasks[taskId].completed = !(totalTasks[taskId].completed);

    window.localStorage.setItem('tasks', JSON.stringify(totalTasks));
    props.updateTasks.setTasks(totalTasks);
  } 

  useEffect(()=> {

  }, [])

  return (
    <Container className="task">
      <div className="task-header">
        <input type="checkbox" onChange={ () => handleCheckTask(id) } checked={completed} name={`task-item${id}`} id={`task-item${id}`} />
        
        <label htmlFor={`task-item${id}`}>
            <svg width="24px" height="24px" viewBox="0 0 18 18" version="1.1">
              <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Rounded" transform="translate(-103.000000, -4323.000000)">
                  <g id="Toggle" transform="translate(100.000000, 4266.000000)">
                    <g id="-Round-/-Toggle-/-check_box" transform="translate(0.000000, 54.000000)">
                      <g>
                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M10.71,16.29 C10.32,16.68 9.69,16.68 9.3,16.29 L5.71,12.7 C5.32,12.31 5.32,11.68 5.71,11.29 C6.1,10.9 6.73,10.9 7.12,11.29 L10,14.17 L16.88,7.29 C17.27,6.9 17.9,6.9 18.29,7.29 C18.68,7.68 18.68,8.31 18.29,8.7 L10.71,16.29 Z" id="🔹-Icon-Color" fill="#ababab"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </label>
        
        <h3 className="task-title" onClick={ () => setTaskBodyIsHidden(!taskBodyIsHidden) }>{title}</h3>
        
        <h4 className="task-cycles">0/{cycles}</h4>
        
        <svg onClick={()=>handleDeleteTask(id)} className="deleteIcon" fill="#00000066" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="32px" height="32px"><path d="M 28 6 C 25.791 6 24 7.791 24 10 L 24 12 L 23.599609 12 L 10 14 L 10 17 L 54 17 L 54 14 L 40.400391 12 L 40 12 L 40 10 C 40 7.791 38.209 6 36 6 L 28 6 z M 28 10 L 36 10 L 36 12 L 28 12 L 28 10 z M 12 19 L 14.701172 52.322266 C 14.869172 54.399266 16.605453 56 18.689453 56 L 45.3125 56 C 47.3965 56 49.129828 54.401219 49.298828 52.324219 L 51.923828 20 L 12 19 z M 20 26 C 21.105 26 22 26.895 22 28 L 22 51 L 19 51 L 18 28 C 18 26.895 18.895 26 20 26 z M 32 26 C 33.657 26 35 27.343 35 29 L 35 51 L 29 51 L 29 29 C 29 27.343 30.343 26 32 26 z M 44 26 C 45.105 26 46 26.895 46 28 L 45 51 L 42 51 L 42 28 C 42 26.895 42.895 26 44 26 z"/></svg>
      </div>
      
      <p className="task-body" hidden={taskBodyIsHidden}>{body !== '' && body}</p>
    </Container>
  )
}
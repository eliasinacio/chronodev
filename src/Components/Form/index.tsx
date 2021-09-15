import React, { useState } from 'react'
import { Container } from './styles';

export function Form (props: any /** ATENÇÃO AQUI */) {
  const [ textareaIsHidden, setTextareaIsHidden ] = useState(true);
  const [ formFields, setFormFields ] = useState({title: '', cycles: 0, body: '', completed: false});

  function handleSubmitNewTask (event: React.SyntheticEvent) {
    event.preventDefault();

    if (formFields.title.trim() === '') {
      alert('Add a title for you task.')
      return;
    }

    let newTask = formFields;
    newTask.completed = false;
    
    let storedTasks = (localStorage.getItem('tasks') !== null) ? JSON.parse(localStorage.getItem('tasks') as any /** ATENÇÃO AQUI */) : [];
    storedTasks.push(newTask);
    window.localStorage.setItem('tasks', JSON.stringify(storedTasks));

    props.updateTasks.setTasks(storedTasks);
    props.closeModal(true);
  }

  return (
    <Container className='newTask-container' onSubmit={ handleSubmitNewTask }>
      <input 
        type="text" 
        name="task-title" 
        placeholder='What do we have for today?'
        value={formFields.title}
        onChange={ event => setFormFields({...formFields, title: event.target.value }) }
      />
      
      <h4>Cycles estimate</h4>
      <div className='inputNumber'>
        <input 
          type="number" 
          min={1} 
          value={formFields.cycles}
          onChange={ (event) => {
            setFormFields({...formFields, cycles: Number(event.target.value)})
          }}/>
        <button 
          type='button'
          onClick={ () => {
            setFormFields({...formFields, cycles: formFields.cycles+1})
          }}>∆</button>
        <button 
          type='button'
          onClick={ () => {
            formFields.cycles>1 && setFormFields({...formFields, cycles: formFields.cycles-1})
          }}>∇</button>
      </div>
      <div className='addDescription'>
        <button
          type='button' 
          onClick={ () => setTextareaIsHidden(!textareaIsHidden) }>
          + Add description
        </button>

        <textarea 
          name="task-body" 
          placeholder="More detals..."
          hidden={textareaIsHidden}
          onChange={ event => setFormFields({...formFields, body: event.target.value }) }
        ></textarea>
      </div>

      <footer>
        <button
          type='button' 
          onClick={ () => props.closeModal(true) }
          >Cancel</button>
        <button 
          type='submit'
          id='save-button'
          >Save</button>
      </footer>
    </Container>
  )
}
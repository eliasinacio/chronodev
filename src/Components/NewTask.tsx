import React, { FormEvent, useState } from 'react'

import '../styles/newTask.scss'

type newTaskFormProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>
}

type formFieldsTypes = {
  title: string, 
  cycles: number, 
  body?: string
}

export function NewTask ( props: newTaskFormProps) {
  const [ textareaIsHidden, setTextareaIsHidden ] = useState(true);
  const [ formFields, setFormFields  ] = useState({title: '', cycles: 0, body: ''} as formFieldsTypes)

  function handleSubmitNewTask (event: FormEvent) {
    event.preventDefault();

    if (formFields.title.trim() === '') {
      alert('add a title for you task')
      return;
    }

    console.log(formFields);
  }

  return (
    <form className='newTask-container' onSubmit={ handleSubmitNewTask }>
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
          onClick={ () => props.closeModal }
          >Cancel</button>
        <button 
          type='submit'
          id='save-button'
          >Save</button>
      </footer>
    </form>
  )
}
import '../styles/newTask.scss'

export function NewTask () {
  return (
    <form className='newTask-container'>
      <input type="text" placeholder='What do we have for today?' />
      <h4>Cycles estimate</h4>
      <div className='inputNumber'>
        <input type="number" min={1} />
        <button>∆</button>
        <button>∇</button>
      </div>
      <span className='addDescription'>
        <button onClick={ () => {return <textarea></textarea>} }>+ Add description</button>
      </span>

      <footer>
        <button>Cancel</button>
        <button id='save-button' >Save</button>
      </footer>
    </form>
  )
}
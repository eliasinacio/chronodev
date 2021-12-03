import '../styles/modal.scss'

export function Modal (props) {
  console.log('->', props.modalInfo);
  return (
    
    <div className="modalContainer">
      <div className="modal">
        <h2>{props.modalInfo.modalInfo.title}</h2>
        <p>{props.modalInfo.modalInfo.body}</p>
        <button onClick={ () => { props.modalInfo.setModalInfo({...props.modalInfo.modalInfo, visible: false}) }}>Close</button>
      </div>
    </div>
  )
}

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Task } from '../../store/ducks/tasks/types';
import { ApplicationState } from '../../store';

import * as TaskActions from '../../store/ducks/tasks/actions'
import { Container } from './styles';
import { TaskItem } from '../TaskItem'
import { Form } from '../Form';


interface StateProps {
  tasks: Task[]
}

interface DispatchProps {
  getTasks: Function;
}

interface State {
  formIsHidden: boolean
}

type Props = StateProps & DispatchProps 

export class TaskList extends React.Component<Props, any> {
  constructor (props: Props) {
    super(props);

    this.state = { formIsHidden: false }
    this.hideForm = this.hideForm.bind(this)
  }

  hideForm () { 
    this.setState({ formisHidden: !this.state.formIsHidden })
  }

  componentDidMount() {
    const { getTasks } = this.props;

    getTasks();
  }

  render () {
    const { tasks } = this.props;

    return (
      <Container>
        <header className="tasks-header">
          <h4>Your Tasks</h4>
        </header>

        <div className="addTask-button">
          <button 
            hidden={ this.state.FormIsHidden }
            onClick={ this.hideForm }
          >
            + Add new Task {this.state.FormIsHidden}
          </button>
        </div>

        <div className='tasks-list'>
          <ul>
            { tasks ? tasks.map((task) => {
                        return (
                          <TaskItem 
                            title={task.title}
                            body={task.body}
                            cycles={task.cycles}
                            completed={task.completed}
                            key={task.id}
                            id={task.id}
                          />
                        )})
                    : <p>0 tasks </p> 
              }    
          </ul>
        </div>

        {  
          !this.state.formIsHidden ? '' : 
          <Form 
            hideForm={ this.state.hideForm }
          />
        }

      </Container>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tasks: state.tasks.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TaskActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);


// a função de alteração de estado não está alterando para esconder ou mostrar o form
// pode ser problema por ser um componente de classe ou pode ser typescript
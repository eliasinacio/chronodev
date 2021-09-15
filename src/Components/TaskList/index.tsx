import { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Task } from '../../store/ducks/tasks/types';
import { ApplicationState } from '../../store';

import * as TaskActions from '../../store/ducks/tasks/actions'
import { Container } from './styles';
import { TaskItem } from '../TaskItem'

interface StateProps {
  tasks: Task[]
}

interface DispatchProps {
  getTasks(): any
}

type Props = StateProps & DispatchProps

class TaskList extends Component<Props> {
  componentDidMount() {
    const { getTasks } = this.props;

    getTasks();
  }

  render () {
    const { tasks } = this.props;
    const formIsHidden = false;

    return (
      <Container>
        <header className="tasks-header">
          <h4>Your Tasks</h4>
        </header>

        <div className="addTask-button">
          <button 
            hidden={!formIsHidden}
            // onClick={ () => setFormIsHidden(false) }
          >
            + Add new Task
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
                    : <p>0 tasks</p> 
              }    
          </ul>
        </div>

        {/* { !formIsHidden && (
          <Form 
            closeModal={ () => setFormIsHidden(!formIsHidden) }
            updateTasks={ {tasks, setTasks} }
          />
          ) 
        } */}

      </Container>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => {
  tasks: state.tasks.data
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TaskActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

// APENAS FALA O COMPONENTE CONECTAR COM A S PROPS E SER EXPORTADO
// PARECE ESTAR CONFLITANDO DADOS DO STATE COM OS PASSADOS PARA O COMPONENTE USAR...
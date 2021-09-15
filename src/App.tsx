import { Header } from './Components/Header';
import { Timer } from './Components/Timer/';
import { TaskList } from './Components/TaskList';
import { GlobalStyle } from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from './store';

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <Provider store={store}>
        <Header />
        <Timer />
        <TaskList />
      </Provider>
    </div>
  );
}
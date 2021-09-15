import { Header } from './Components/Header';
import { Timer } from './Components/Timer/';
import { TaskList } from './Components/TaskList';
import { GlobalStyle } from './styles/GlobalStyle';

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Timer />
      <TaskList />
    </div>
  );
}
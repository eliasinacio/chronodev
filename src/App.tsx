import { Header } from './Components/Header';
import { Timer } from './Components/Timer/Timer';
import { TaskManager } from './Components/TaskManager';

export function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <TaskManager />
    </div>
  );
}
import { Header } from './Components/Header';
import { Timer } from './Components/Timer';
import { TaskManager } from './Components/TaskManager';

export function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <TaskManager />
      {/* fazer busca e listagem de musicas para tocar / youtube */}
    </div>
  );
}
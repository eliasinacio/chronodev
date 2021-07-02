import { useState } from "react";
import { createContext, ReactNode } from "react";

type Task = {
  title: string,
  body?: string,
  cycles: number,
}

type TasksContextType = {
  tasks: Task[] | null 
  setTask: (task: Task) => void
}

type TasksContextProviderProps = {
  children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextType);

export function TasksContextProvider ({children}: TasksContextProviderProps) {
  let storedTasksList = localStorage.getItem('tasks');
  storedTasksList = JSON.parse(storedTasksList || '');

  storedTasksList = Object(storedTasksList);

  const [ tasks, setTasks ] = useState<Array<Task>>([{title: 'a', body: 'a', cycles: 2}]);

  function setTask (newTask: Task) {
    console.log(tasks, storedTasksList);

    const task = {
      title: newTask.title,
      body: newTask.body,
      cycles: newTask.cycles
    }

    localStorage.setItem('tasks', JSON.stringify(tasks.concat(task)));

    setTasks(tasks.concat(task));
  }

  return (
    <TasksContext.Provider value={{tasks, setTask}}>
      {children}
    </TasksContext.Provider>
  )
}


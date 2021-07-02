import { useEffect } from "react";
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
  const [ tasks, setTasks ] = useState([{} as Task]);

  useEffect(()=> {
    const taskslist = JSON.parse(localStorage.getItem('tasks') || "") || {}

    setTasks(taskslist);
  }, []);

  function setTask (task: Task) {
    localStorage.setItem('tasks', JSON.stringify(task));
  }

  return (
    <TasksContext.Provider value={{tasks, setTask}}>
      {children}
    </TasksContext.Provider>
  )
}
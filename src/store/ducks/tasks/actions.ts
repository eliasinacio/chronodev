import { action } from "typesafe-actions";
import { Task } from "./types";

// action -> recebe todas as tasks e leva para atualizar o store central
export const getTasks = (data: Task[]) => action('GET_TASKS', { data });

export const setNewTask = () => action('SET_NEW_TASK');
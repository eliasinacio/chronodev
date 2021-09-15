export interface Task {
  id?: number,
  title: string,
  body: string,
  cycles: number,
  completed: boolean,
}

export interface TaskState {
  readonly data: Task[]
}
import { Reducer } from 'redux'
import { TaskState } from "./types"

const INITIAL_STATE: TaskState = {
  data: [],
}

const reducer: Reducer<TaskState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, data: action.payload.data }

    default: 
      return state;
  }
}

export default reducer;
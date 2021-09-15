import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from 'redux-saga';
import { TaskState } from "./ducks/tasks/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  tasks: TaskState
}
const sagaMidlleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMidlleware));

sagaMidlleware.run(rootSaga);

export default store;

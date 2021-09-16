import { put } from 'redux-saga/effects'
import { getTasks } from './actions'

export function* get(): any {
  try {
    const response = yield JSON.parse(localStorage.getItem('tasks') || '');

    yield put(getTasks(response.data));
  } catch (err) {
    console.log('Erro ao pegar tasks do LocalStorage');
  }
}

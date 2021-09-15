import { all, takeLatest } from "@redux-saga/core/effects";

import { get } from './tasks/sagas'

export default function* rootSaga(): any{
  return yield all([
    takeLatest('GET_TASKS', get),
  ])
}
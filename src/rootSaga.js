import { all } from 'redux-saga/effects';

import { saga as presets } from 'modules/presets';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    presets(),
  ]);
}

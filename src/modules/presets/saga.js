import { put, takeLatest } from 'redux-saga/effects';

import { actions as iterationsActions } from 'modules/iterations';
import { actions as axiomActions } from 'modules/axiom';
import { actions as rulesActions } from 'modules/rules';
import { actions as renderersActions } from 'modules/renderer';
import { actions as paramsActions } from 'modules/params';

import { LOAD_PRESET } from './actionTypes';

function* loadPreset(action) {
  const preset = action.preset;

  // Renderer
  yield put(renderersActions.updateRenderer(preset.rendererType));
  yield put(paramsActions.loadParams(preset.rendererType, preset.params));

  // L system
  yield put(iterationsActions.updateIterations(preset.iterations));
  yield put(axiomActions.updateAxiom(preset.axiom));
  yield put(rulesActions.loadRules(preset.rules));

  // Trigger re-render
  yield put(renderersActions.invalidateRendering());
}

function* main() {
  yield takeLatest(LOAD_PRESET, loadPreset);
}

export default main;

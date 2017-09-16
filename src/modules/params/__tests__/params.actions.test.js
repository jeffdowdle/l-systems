import * as actions from 'modules/params/actions';

describe('Params action creators behave correctly', () => {
  it('loadParams(renderer, params)', () => {
    const expected = {
      type: 'params/LOAD_PARAMS',
      renderer: 'testRenderer',
      params: 'testParams',
    };

    const result = actions.loadParams('testRenderer', 'testParams');

    expect(result).toEqual(expected);
  });

  it('updateParam(renderer, param, value)', () => {
    const expected = {
      type: 'params/UPDATE_PARAM',
      renderer: 'testRenderer',
      param: 'testParam',
      value: 'testValue',
    };

    const result = actions.updateParam('testRenderer', 'testParam', 'testValue');

    expect(result).toEqual(expected);
  });
});

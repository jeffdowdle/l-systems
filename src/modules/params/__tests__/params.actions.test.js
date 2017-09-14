import * as actions from 'modules/params/actions';

describe('Params action creators behave correctly', () => {
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

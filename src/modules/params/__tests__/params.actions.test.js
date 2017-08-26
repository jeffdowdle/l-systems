import * as actions from '../internal/actions';

describe('Params action creators behave correctly', () => {
  it('registerParam(declaration)', () => {
    const expected = {
      type: 'params/REGISTER_PARAM',
      declaration: {
        just: 'a test',
      },
    };

    const result = actions.registerParam({
      just: 'a test',
    });

    expect(result).toEqual(expected);
  });

  it('updateParam(id)', () => {
    const expected = {
      type: 'params/UPDATE_PARAM',
      id: 'testParam',
      value: 'testValue',
    };

    const result = actions.updateParam('testParam', 'testValue');

    expect(result).toEqual(expected);
  });
});

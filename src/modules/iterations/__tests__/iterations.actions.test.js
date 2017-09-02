import * as actions from '../internal/actions';

describe('Iterations action creators behave correctly', () => {
  it('updateIterations(iterations)', () => {
    const expected = {
      type: 'iterations/UPDATE_ITERATIONS',
      iterations: 'testString',
    };

    const result = actions.updateIterations('testString');
    expect(result).toEqual(expected);
  });
});

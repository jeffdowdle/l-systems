import * as actions from '../internal/actions';

describe('Rules action creators behave correctly', () => {
  it('addRule()', () => {
    const expectedOnce = {
      type: 'rules/ADD_RULE',
      id: 1,
    };

    const expectedTwice = {
      type: 'rules/ADD_RULE',
      id: 2,
    };

    const resultOnce = actions.addRule();
    expect(resultOnce).toEqual(expectedOnce);

    const resultTwice = actions.addRule();
    expect(resultTwice).toEqual(expectedTwice);
  });

  it('removeRule(id)', () => {
    const expected = {
      type: 'rules/REMOVE_RULE',
      id: 123,
    };

    const result = actions.removeRule(123);

    expect(result).toEqual(expected);
  });

  it('updateRule(id, values)', () => {
    const expected = {
      type: 'rules/UPDATE_RULE',
      id: 123,
      values: { test: 'thing' },
    };

    const result = actions.updateRule(123, { test: 'thing' });

    expect(result).toEqual(expected);
  });
});

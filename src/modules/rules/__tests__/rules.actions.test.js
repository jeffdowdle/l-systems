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

  it('updateSymbol(id, symbol)', () => {
    const expected = {
      type: 'rules/UPDATE_RULE_SYMBOL',
      id: 123,
      symbol: 'test',
    };

    const result = actions.updateSymbol(123, 'test');

    expect(result).toEqual(expected);
  });

  it('updateSuccessor(id, successor)', () => {
    const expected = {
      type: 'rules/UPDATE_RULE_SUCCESSOR',
      id: 123,
      successor: 'test',
    };

    const result = actions.updateSuccessor(123, 'test');

    expect(result).toEqual(expected);
  });
});

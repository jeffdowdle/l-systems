import deepFreeze from 'deep-freeze';
import reducer from '../internal/reducer';
import * as types from '../internal/actionTypes';

jest.unmock('../internal/actions');

test('Adds a new rule', () => {
  const before = [];

  const actionOne = {
    type: types.ADD_RULE,
    id: 123,
  };

  const afterOnce = [
    {
      id: 123,
      symbol: null,
      rule: null,
    },
  ];

  const actionTwo = {
    type: types.ADD_RULE,
    id: 456,
  };

  const afterTwice = [
    {
      id: 123,
      symbol: null,
      rule: null,
    },
    {
      id: 456,
      symbol: null,
      rule: null,
    },
  ];

  deepFreeze(before);
  expect(reducer(before, actionOne)).toEqual(afterOnce);
  deepFreeze(afterOnce);
  expect(reducer(afterOnce, actionTwo)).toEqual(afterTwice);
});

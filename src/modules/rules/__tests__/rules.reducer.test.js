import deepFreeze from 'deep-freeze';
import reducer from '../internal/reducer';
import * as types from '../internal/actionTypes';

jest.unmock('../internal/actions');

describe('rules/ADD_RULE', () => {
  it('Adds a new rule', () => {
    const before = [];

    const actionOne = {
      type: types.ADD_RULE,
      id: 123,
    };

    const afterOnce = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
    ];

    const actionTwo = {
      type: types.ADD_RULE,
      id: 456,
    };

    const afterTwice = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
      {
        id: 456,
        symbol: '',
        successor: '',
      },
    ];

    deepFreeze(before);
    expect(reducer(before, actionOne)).toEqual(afterOnce);
    deepFreeze(afterOnce);
    expect(reducer(afterOnce, actionTwo)).toEqual(afterTwice);
  });
});

describe('rules/REMOVE_RULE', () => {
  it('removes an existing rule', () => {
    const before = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
      {
        id: 456,
        symbol: '',
        successor: '',
      },
    ];

    const action = {
      type: types.REMOVE_RULE,
      id: 123,
    };

    const after = [
      {
        id: 456,
        symbol: '',
        successor: '',
      },
    ];

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });

  it('returns current state if rule doesn\'t exist', () => {
    const before = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
      {
        id: 456,
        symbol: '',
        successor: '',
      },
    ];

    const action = {
      type: types.REMOVE_RULE,
      id: 999,
    };

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(before);
  });
});

describe('rules/UPDATE_RULE', () => {
  it('updates the rule\'s symbol', () => {
    const before = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
      {
        id: 456,
        symbol: '',
        successor: '',
      },
    ];

    const action = {
      type: types.UPDATE_RULE,
      id: 456,
      values: {
        symbol: 'symbolTest',
      },
    };

    const after = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
      {
        id: 456,
        symbol: 'symbolTest',
        successor: '',
      },
    ];

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });

  it('updates the rule\'s successor', () => {
    const before = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
      {
        id: 456,
        symbol: '',
        successor: '',
      },
    ];

    const action = {
      type: types.UPDATE_RULE,
      id: 456,
      values: {
        successor: 'successorTest',
      },
    };

    const after = [
      {
        id: 123,
        symbol: '',
        successor: '',
      },
      {
        id: 456,
        symbol: '',
        successor: 'successorTest',
      },
    ];

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});

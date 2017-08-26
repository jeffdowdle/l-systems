import deepFreeze from 'deep-freeze';
import reducer from '../internal/reducer';
import * as types from '../internal/actionTypes';

jest.unmock('../internal/actions');

describe('params/REGISTER_PARAM', () => {
  it('Registers a parameter', () => {
    const before = [];

    const action = {
      type: types.REGISTER_PARAM,
      declaration: {
        id: 'testId',
        fieldType: 'TEXT',
        initialValue: 'testValue',
      },
    };

    const after = [
      {
        id: 'testId',
        value: 'testValue',
      },
    ];

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});

describe('params/UPDATE_PARAM', () => {
  it('updates the param\'s value', () => {
    const before = [
      {
        id: 'testId_1',
        fieldType: 'TEXT',
        value: 'testing one',
      },
      {
        id: 'testId_2',
        fieldType: 'SELECT',
        value: 'testing two',
      },
    ];

    const action = {
      type: types.UPDATE_PARAM,
      id: 'testId_2',
      value: 'updated value',
    };

    const after = [
      {
        id: 'testId_1',
        fieldType: 'TEXT',
        value: 'testing one',
      },
      {
        id: 'testId_2',
        fieldType: 'SELECT',
        value: 'updated value',
      },
    ];

    deepFreeze(before);
    expect(reducer(before, action)).toEqual(after);
  });
});

import deepFreeze from 'deep-freeze';
import reducer from 'modules/params/reducer';
import * as types from 'modules/params/actionTypes';

jest.unmock('modules/params/actions');

describe('params/UPDATE_PARAM', () => {
  it('updates the param\'s value', () => {
    const before = {
      testRenderer: [
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
      ],
      otherRenderer: [
        {
          id: 'testId_1',
          fieldType: 'TEXT',
          value: 'testing one',
        },
      ],
    };

    const actionOne = {
      type: types.UPDATE_PARAM,
      renderer: 'testRenderer',
      param: 'testId_2',
      value: 'updated value',
    };

    const actionTwo = {
      type: types.UPDATE_PARAM,
      renderer: 'otherRenderer',
      param: 'testId_1',
      value: 'updated value 2',
    };

    const afterOnce = {
      testRenderer: [
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
      ],
      otherRenderer: [
        {
          id: 'testId_1',
          fieldType: 'TEXT',
          value: 'testing one',
        },
      ],
    };

    const afterTwice = {
      testRenderer: [
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
      ],
      otherRenderer: [
        {
          id: 'testId_1',
          fieldType: 'TEXT',
          value: 'updated value 2',
        },
      ],
    };

    deepFreeze(before);
    expect(reducer(before, actionOne)).toEqual(afterOnce);
    deepFreeze(afterOnce);
    expect(reducer(afterOnce, actionTwo)).toEqual(afterTwice);
  });
});

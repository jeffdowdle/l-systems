import * as actions from '../actions';

describe('Renderer action creators behave correctly', () => {
  it('updateRenderer(rendererId)', () => {
    const expected = {
      type: 'renderers/UPDATE_RENDERER',
      renderer: 'testRenderer',
    };

    const result = actions.updateRenderer('testRenderer');

    expect(result).toEqual(expected);
  });
});

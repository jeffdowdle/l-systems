import * as actions from 'modules/renderer/actions';

describe('Renderer action creators behave correctly', () => {
  it('updateRenderer(rendererId)', () => {
    const expected = {
      type: 'renderers/UPDATE_RENDERER',
      renderer: 'testRenderer',
    };

    const result = actions.updateRenderer('testRenderer');

    expect(result).toEqual(expected);
  });

  it('invalidateRendering()', () => {
    const expected = {
      type: 'renderers/INVALIDATE_RENDERING',
    };

    const result = actions.invalidateRendering();

    expect(result).toEqual(expected);
  });

  it('validateRendering()', () => {
    const expected = {
      type: 'renderers/VALIDATE_RENDERING',
    };

    const result = actions.validateRendering();

    expect(result).toEqual(expected);
  });
});

// @flow
import Renderer2d from 'renderers/2d';

export const rendererTypes = {
  RENDERER_2D: 'RENDERER_2D'
};

export type RendererType = $Keys<typeof rendererTypes>;

export const renderers = {
  [`${rendererTypes.RENDERER_2D}`]: Renderer2d
};

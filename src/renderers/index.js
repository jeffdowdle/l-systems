// @flow
import Renderer2d from 'renderers/2d';
import Renderer3d from 'renderers/3d';

export const rendererTypes = {
  RENDERER_2D: 'RENDERER_2D',
  RENDERER_3D: 'RENDERER_3D'
};

export type RendererType = $Keys<typeof rendererTypes>;

export const renderers = {
  [`${rendererTypes.RENDERER_2D}`]: Renderer2d,
  [`${rendererTypes.RENDERER_3D}`]: Renderer3d
};

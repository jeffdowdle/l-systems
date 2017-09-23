// @flow
import rafCanvas from './rafCanvas';
import naiveCanvas from './naiveCanvas';

const strategyTypes = {
  RAF_CANVAS: 'RAF_CANVAS',
  NAIVE_CANVAS: 'NAIVE_CANVAS'
};

export type StrategyType = $Keys<typeof strategyTypes>;

export default {
  [`${strategyTypes.NAIVE_CANVAS}`]: naiveCanvas,
  [`${strategyTypes.RAF_CANVAS}`]: rafCanvas,
};

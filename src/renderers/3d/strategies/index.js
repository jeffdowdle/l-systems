// @flow
import webgl from './webgl';

const strategyTypes = {
  WEBGL: 'WEBGL',
};

export type StrategyType = $Keys<typeof strategyTypes>;

export default {
  [`${strategyTypes.WEBGL}`]: webgl,
};

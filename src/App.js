import React from 'react';
import { ProductionRules } from './modules/rules';
import { Axiom } from './modules/axiom';
import { ConnectedRenderer } from './modules/renderer';

const App = () => (
  <div>
    <Axiom />
    <ProductionRules />
    <ConnectedRenderer />
  </div>
);

export default App;

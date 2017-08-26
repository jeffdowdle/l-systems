import React from 'react';
import { ProductionRules } from './modules/rules';
import { Axiom } from './modules/axiom';
import { ConnectedRenderer } from './modules/renderer';
import AppLayout, { AppLayoutSideBar, AppLayoutMain } from './components/AppLayout';

const App = () => (
  <AppLayout>
    <AppLayoutSideBar>
      <Axiom />
      <ProductionRules />
    </AppLayoutSideBar>
    <AppLayoutMain>
      <ConnectedRenderer />
    </AppLayoutMain>
  </AppLayout>
);

export default App;

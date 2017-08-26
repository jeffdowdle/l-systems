import React from 'react';
import { ProductionRules } from './modules/rules';
import { Axiom } from './modules/axiom';
import { Params } from './modules/params';
import { ConnectedRenderer } from './modules/renderer';
import UpdateButton from './components/UpdateButton';
import AppLayout, { AppLayoutSideBar, AppLayoutMain } from './components/AppLayout';

const App = () => (
  <AppLayout>
    <AppLayoutSideBar>
      <Params />
      <Axiom />
      <ProductionRules />
      <UpdateButton />
    </AppLayoutSideBar>

    <AppLayoutMain>
      <ConnectedRenderer />
    </AppLayoutMain>
  </AppLayout>
);

export default App;

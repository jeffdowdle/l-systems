import React from 'react';
import { ProductionRules } from './modules/rules';
import { Axiom } from './modules/axiom';
import { Params } from './modules/params';
import { ConnectedRenderer } from './modules/renderer';
import UpdateButton from './components/UpdateButton';
import AppLayout, { AppLayoutSideBar, AppLayoutMain } from './components/AppLayout';
import SideBarSection from './components/SideBarSection';

const App = () => (
  <AppLayout>
    <AppLayoutSideBar
      footer={<UpdateButton />}
    >
      <SideBarSection heading="Parameters">
        <Params />
      </SideBarSection>
      <SideBarSection heading="Rules">
        <Axiom />
        <ProductionRules />
      </SideBarSection>
    </AppLayoutSideBar>

    <AppLayoutMain>
      <ConnectedRenderer />
    </AppLayoutMain>
  </AppLayout>
);

export default App;

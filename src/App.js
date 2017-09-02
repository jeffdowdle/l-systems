import React from 'react';
import { RendererChooser } from './modules/renderers';
import { ProductionRules } from './modules/rules';
import { Axiom } from './modules/axiom';
import { Params } from './modules/params';
import { Iterations } from './modules/iterations';
import ConnectedRenderer from './modules/lsystem/containers/ConnectedRenderer';
import UpdateButton from './components/UpdateButton';
import AppLayout, { AppLayoutSideBar, AppLayoutMain } from './components/AppLayout';
import SideBarSection from './components/SideBarSection';

const App = () => (
  <AppLayout>
    <AppLayoutSideBar
      footer={<UpdateButton />}
    >
      <RendererChooser />
      <SideBarSection heading="Parameters">
        <Params />
      </SideBarSection>
      <SideBarSection heading="Rules">
        <Iterations />
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

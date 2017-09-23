import React from 'react';
import { Presets } from 'modules/presets';
import { RendererChooser, StrategyChooser } from 'modules/renderer';
import { ProductionRules } from 'modules/rules';
import { Axiom } from 'modules/axiom';
import { Params } from 'modules/params';
import { Commands } from 'modules/commands';
import { Iterations } from 'modules/iterations';
import ConnectedRenderer from 'modules/lsystem/containers/ConnectedRenderer';
import ConnectedUpdateButton from 'modules/lsystem/containers/ConnectedUpdateButton';
// TODO Seperate or fix these imports, they appear as 'Unknown' in react devtools
import AppLayout, { AppLayoutSideBar, AppLayoutMain } from 'components/AppLayout';
import SideBarSection from 'components/SideBarSection';

const App = () => (
  <AppLayout>
    <AppLayoutSideBar
      footer={<ConnectedUpdateButton />}
    >
      <RendererChooser />
      <SideBarSection heading="Presets">
        <Presets />
      </SideBarSection>
      <SideBarSection heading="Params">
        <StrategyChooser />
        <Params />
      </SideBarSection>
      <SideBarSection heading="Commands">
        <Commands />
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

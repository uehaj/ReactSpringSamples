import React, { useState } from "react";
import SampleSpringA from "./SampleSpringA";
import SampleSpringB from "./SampleSpringB";
import SampleSprings from "./SampleSprings";
import SampleTrail from "./SampleTrail";
import SampleChain from "./SampleChain";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const App = props => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Spring</Tab>
          <Tab>Springs</Tab>
          <Tab>Trail</Tab>
          <Tab>Chain</Tab>
        </TabList>

        <TabPanel>
          <SampleSpringA />
          <SampleSpringB />
        </TabPanel>
        <TabPanel>
          <SampleSprings />
        </TabPanel>
        <TabPanel>
          <SampleTrail />
        </TabPanel>
        <TabPanel>
          <SampleChain />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;

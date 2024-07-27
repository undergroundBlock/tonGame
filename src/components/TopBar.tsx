import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TopBar = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Privacy Coins</Tab>
        <Tab>Technology</Tab>
        <Tab>Markets</Tab>
        <Tab>Profile</Tab>
      </TabList>
      <TabPanel>
        <h2>Privacy Coins Cards</h2>
        {/* Content for Cryptocurrency Cards */}
      </TabPanel>
      <TabPanel>
        <h2>Technology Cards</h2>
        {/* Content for Technology Cards */}
      </TabPanel>
      <TabPanel>
        <h2>Markets</h2>
        <h2>Privacy Coins Cards</h2>
      </TabPanel>
      <TabPanel>
        <h2>Profile</h2>
        {/* Content for Profile */}
      </TabPanel>
    </Tabs>
  );
};

export default TopBar;

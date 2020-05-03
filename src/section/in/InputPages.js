import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import TabPanel from './TabPanel';
import TemplateTab from './templateTab';
import SourceTab from './sourceTab';
import EmailEquipInfoTab from './emailEquipInfoTab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tab: {},
}));

function a11yProps(index) {
  return {
    id: `input-tab-${index}`,
    'aria-controls': `input-tabpanel-${index}`,
  };
}

export default function InputPages(props) {
  const classes = useStyles();
  const [tabIdx, setTabIdx] = React.useState(2);

  const handleChange = (event, newValue) => {
    setTabIdx(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        variant="fullWidth"
        value={tabIdx}
        onChange={handleChange}
        aria-label="input data tabs"
      >
        <Tab label="Email" className={classes.tab} {...a11yProps(0)} />
        <Tab label="Template" className={classes.tab} {...a11yProps(1)} />
        <Tab label="Source Data" className={classes.tab} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabIdx} index={0}>
        <EmailEquipInfoTab {...props}></EmailEquipInfoTab>
      </TabPanel>
      <TabPanel value={tabIdx} index={1}>
        <TemplateTab {...props}></TemplateTab>
      </TabPanel>
      <TabPanel value={tabIdx} index={2}>
        <SourceTab {...props}></SourceTab>
      </TabPanel>
    </div>
  );
}

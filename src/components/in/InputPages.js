import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import TabPanel from "./TabPanel";
import Template from "./Template";
import Source from "./Source";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function InputPages({ onChanged, defaultValue }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Source Data" {...a11yProps(0)} />
        <Tab label="Template" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Source onChanged={onChanged} defaultValue={defaultValue}></Source>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Template onChanged={onChanged} defaultValue={defaultValue}></Template>
      </TabPanel>
    </div>
  );
}

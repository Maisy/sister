import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from './TabPanel'
import Template from './Template'
import Source from './Source'
import StaticData from './StaticData'
// import UserEmails from "./UserEmails";
// import EquipInfos from "./EquipInfos";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  tab: {},
}))

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function InputPages(){
  const classes = useStyles()
  const [tabIdx, setTabIdx] = React.useState(0)

  const handleChange = (event, newValue) => {
    setTabIdx(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={tabIdx}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Email" className={classes.tab} {...a11yProps(0)} />
        <Tab label="Template" className={classes.tab} {...a11yProps(1)} />
        <Tab label="Source Data" className={classes.tab} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabIdx} index={0}>
        <StaticData></StaticData>
      </TabPanel>
      <TabPanel value={tabIdx} index={1}>
        <Template></Template>
      </TabPanel>
      <TabPanel value={tabIdx} index={2}>
        <Source></Source>
      </TabPanel>
    </div>
  )
}

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "./TabStyles";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function SimpleTabs({
  background,
  prosAndCons,
  performance,
  example,
  quiz,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{ indicator: classes.indicator }}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab className={classes.tab} label="Background" {...a11yProps(0)} />
          <Tab
            className={classes.tab}
            label="pros and cons"
            {...a11yProps(1)}
          />
          <Tab className={classes.tab} label="example" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Performance" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Quiz" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.panel}>
        {background}
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.panel}>
        {prosAndCons}
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.panel}>
        {example}
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.panel}>
        {performance}
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.panel}>
        {quiz}
      </TabPanel>
    </div>
  );
}

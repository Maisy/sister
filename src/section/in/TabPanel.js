import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`input-tabpanel-${index}`}
      aria-labelledby={`input-tab-${index}`}
      {...other}
    >
      {/* 최초 한번에 다 렌더링 */}
      <Box p={3}>{children}</Box>
      {/* 클릭할때마다 렌더링 */}
      {/* {value === index && <Box  p={3}>{children}</Box>} */}
    </Typography>
  );
}

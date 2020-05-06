import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '20px 0 20px 0',
    textAlign: 'left',
  },
});

const splitTextNewLine = function (data = '') {
  return data.split('\n').map((line, idx) => {
    return (
      <span key={idx}>
        {line}
        <br />
      </span>
    );
  });
};

export default function ViewText({ data }) {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>{splitTextNewLine(data)}</Typography>
  );
}

ViewText.propTypes = {
  data: PropTypes.string.isRequired,
};

import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ContentsActions } from '../../store/modules/contents';
import { StaticActions } from '../../store/modules/basicInfos';

const useStyle = makeStyles({
  root: {
    minWidth: 'unset',
    width: '100%',
    height: '100%',
    // color: "#f0f0f0"
    color: 'black',
  },
});

function RunButton({ addRunClick }) {
  const classes = useStyle();
  const dispatch = useDispatch();

  return (
    <Button
      className={classes.root}
      variant="contained"
      // color="primary"
      onClick={() => {
        addRunClick();
        dispatch(StaticActions.getReceiver());
        dispatch(ContentsActions.parseData());
      }}
    >
      >>
    </Button>
  );
}

export default RunButton;

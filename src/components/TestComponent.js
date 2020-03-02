import React from 'react';
import ErrorDialog from './ErrorDialog';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { setErrorTrue, setErrorFalse } from '../store/modules/testAction';

const useStyles = makeStyles({
  root: { height: 50 },
});

export default function TestComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = value => {
    if (value) {
      dispatch(setErrorTrue());
    } else {
      dispatch(setErrorFalse());
    }
  };

  const hasError = useSelector(state => state.test.error);

  console.log(hasError);
  return (
    <div className={classes.root}>
      <Button onClick={() => handleClick(true)}>SET TRUE</Button>
      <Button onClick={() => handleClick(false)}>SET FALSE</Button>
      {hasError && <ErrorDialog onClose={() => handleClick(false)}></ErrorDialog>}
    </div>
  );
}

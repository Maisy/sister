import React from 'react';
import { useSelector } from 'react-redux';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ViewSet from './ViewSet';
import CopyButton from './CopyButton';
import Receiver from './Receiver';
import ViewText from './ViewText';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 600,
    fontSize: 16,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 5,
    textAlign: 'right',
    color: 'black',
    fontSize: '10pt',
    fontFamily: '맑은 고딕',
  },
  disabledPaper: {
    color: 'gray',
  },
}));

function ViewContents() {
  const classes = useStyles();
  const dataList = useSelector((store) => store.contents.result);

  return dataList.map((data, idx) => {
    return data ? (
      <Paper
        className={classNames(classes.paper, {
          [classes.disabledPaper]: !data.shouldSend,
        })}
        key={idx}
      >
        <ViewText className={classes.title} data={data.emailId}></ViewText>
        <Receiver keyId={data.emailId}></Receiver>
        <CopyButton targetId={`contents${idx + 1}`}></CopyButton>
        <ViewSet id={`contents${idx + 1}`} inputData={data}></ViewSet>
      </Paper>
    ) : (
      ''
    );
  });
}

export default React.memo(ViewContents);

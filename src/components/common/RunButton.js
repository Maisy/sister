import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { ContentsActions } from '../../store/modules/contents'
import { StaticActions } from '../../store/modules/static'

const useStyle = makeStyles({
  root: {
    minWidth: 'unset',
    width: '100%',
    height: '100%',
    // color: "#f0f0f0"
    color: 'black',
  },
})

function RunButton({ ContentsActions, StaticActions }) {
  const classes = useStyle()
  return (
    <Button
      className={classes.root}
      variant="contained"
      // color="primary"
      onClick={() => {
        StaticActions.getReceiver()
        ContentsActions.parseData()
      }}
    >
      >>
    </Button>
  )
}

const mapStateToProps = state => ({})

// const mapDispatchToProps = dispatch => ({
//   parseData: () => dispatch(ContentsActions.parseData()),
//   getReceiver: () => dispatch(getReceiver()),
// })
const mapDispatchToProps = dispatch => ({
  ContentsActions: bindActionCreators(ContentsActions, dispatch),
  StaticActions: bindActionCreators(StaticActions, dispatch),
})
// bindActionCreators({ ContentsActions, getReceiver }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RunButton)

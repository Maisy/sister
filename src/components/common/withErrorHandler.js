import React from 'react';
import { Snackbar } from '@material-ui/core';

export default function withErrorHandler(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidCatch(err, errorInfo) {
      this.setState(() => ({ err, errorInfo }));
    }

    render() {
      if (this.state.err) {
        return (
          <Snackbar
            open={this.state.err}
            message={this.state.errorInfo.componentStack}
          ></Snackbar>
        );
      }
      return <WrappedComponent {...this.props}></WrappedComponent>;
    }
  };
}

import React, { Component } from 'react';

class LoadHandler extends Component {
  render() {
    if (this.props.loading) {
      if (!!this.props.showLoading) return null;
      return <h1>Loading...</h1>;
    }

    if (this.props.error) {
      if (!!this.props.showError) return null;
      return <h1>{this.props.error.message}</h1>;
    }

    return this.props.renderComponent();
  }
}

export default LoadHandler;

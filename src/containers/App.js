import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export class App extends Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

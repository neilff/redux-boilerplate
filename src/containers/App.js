import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { companyPageSelector } from '../selectors/companies';
import * as searchActions from '../actions/search';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searchActions, dispatch);
}

function App(props) {
  const {
    error,
    loading,
    onCompanySearch,
    onCompanyTypeahead,
    results,
    searchValue,
  } = props;

  return (
    <div>
      <p>Typeahead Demo</p>

      <form onSubmit={ (e) => {
        e.preventDefault();
        onCompanySearch(searchValue);
      } }>
        <input
          type="text"
          onChange={ e => onCompanyTypeahead(e.target.value) }
          value={ searchValue } />

        <button type="submit">Go</button>

        {(() => {
          if (loading) {
            return (
              <div style={{ ...styles.alertBlock, ...styles.info } }>Loading...</div>
            );
          }

          if (error) {
            return (
              <div style={{ ...styles.alertBlock, ...styles.warning } }>{ error }</div>
            );
          }

          return null;
        })()}

        <ul>
          {
            results.map((i, idx) => (
              <li key={ idx } style={ styles.resultItem }>
                <span style={ styles.companyName }>{ i.name }</span>
                <span style={ styles.logoContainer }>
                  <img style={ styles.logo } src={ i.logo } />
                </span>
              </li>
            ))
          }
        </ul>
      </form>
    </div>
  );
}

App.displayName = 'App';
App.propTypes = {
  onCompanySearch: PropTypes.func,
  onCompanyTypeahead: PropTypes.func,
  results: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const styles = {
  alertBlock: {
    margin: '15px 0',
    padding: 10,
  },
  info: {
    backgroundColor: 'lightblue',
  },
  warning: {
    backgroundColor: 'tomato',
    color: 'white',
  },
  resultItem: {
    display: 'flex',
    alignItems: 'center',
  },
  companyName: {
    width: 220,
  },
  logoContainer: {
    flex: '1 1 auto',
  },
  logo: {
    width: 100,
  },
};

export default connect(
  companyPageSelector,
  mapDispatchToProps
)(App);

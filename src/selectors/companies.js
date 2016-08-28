import { createStructuredSelector } from 'reselect';
import { COMPANY_SEARCH } from '../actions/search';

export const getCompanySearchValue = state => state.getIn(['autocomplete', 'search'], '');
export const getCompanyResults = state => state.getIn(['autocomplete', 'results'], []).toJS();

export const getRequestWaitStatus = (requestId) => {
  return state => state.getIn(['request', 'waiting', requestId], false);
};

export const getRequestError = (requestId) => {
  return state => state.getIn(['request', 'errors', requestId], undefined);
};

/**
 * Selector for loading the required data for the company page
 */
export const companyPageSelector = createStructuredSelector({
  error: getRequestError(COMPANY_SEARCH.SUBMIT),
  loading: getRequestWaitStatus(COMPANY_SEARCH.SUBMIT),
  results: getCompanyResults,
  searchValue: getCompanySearchValue,
});

import createTypes from './utils/createTypes';

export const COMPANY_SEARCH = createTypes('COMPANY_SEARCH', ['TYPE', 'SUBMIT']);

export function onCompanySearch(companyName) {
  return {
    type: COMPANY_SEARCH.SUBMIT,
    payload: companyName,
  };
}

export function onCompanyTypeahead(value) {
  return {
    type: COMPANY_SEARCH.TYPE,
    payload: value,
  };
}

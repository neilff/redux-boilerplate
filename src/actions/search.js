import createTypes from './utils/createTypes';
import createAction from './utils/createAction';

export const COMPANY_SEARCH = createTypes('COMPANY_SEARCH', ['TYPE', 'SUBMIT', 'CLEAR']);

export const clearCompanySearch = () => createAction(COMPANY_SEARCH.CLEAR);
export const onCompanySearch = (companyName) => createAction(COMPANY_SEARCH.SUBMIT, companyName);
export const onCompanyTypeahead = (value) => createAction(COMPANY_SEARCH.TYPE, value);

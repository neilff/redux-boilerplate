import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { COMPANY_SEARCH } from '../actions/search';
import { fetchCompanySuggestion } from './watchCompanySuggestion';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* handleCompanyTypeahead(action) {
  yield call(delay, 500);

  yield call(fetchCompanySuggestion, action);
}

function* watchCompanyTypeahead() {
  yield* takeLatest(COMPANY_SEARCH.TYPE, handleCompanyTypeahead);
}

export default watchCompanyTypeahead;
import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import requestSequence from './utils/requestSequence';
import { COMPANY_SEARCH, clearCompanySearch } from '../actions/search';
import { searchAutocomplete } from '../api/clearbit';

export function* fetchCompanySuggestion({ payload }) {
  if (payload.length === 0) {
    return yield put(clearCompanySearch());
  }

  const result = yield call(
    requestSequence,
    [ searchAutocomplete, payload ],
    { requestType: COMPANY_SEARCH.SUBMIT }
  );
}

function* watchCompanySuggestion() {
  yield* takeLatest(COMPANY_SEARCH.SUBMIT, fetchCompanySuggestion);
}

export default watchCompanySuggestion;
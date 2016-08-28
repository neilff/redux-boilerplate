import { fromJS } from 'immutable';
import { REQUEST } from '../actions/request';
import { COMPANY_SEARCH } from '../actions/search';

const defaultState = fromJS({
  search: '',
  results: [],
});

export default function reducer(state = defaultState, { payload, type, meta } = {}) {
  switch (type) {
    case COMPANY_SEARCH.TYPE:
      return state.set('search', payload);

    case REQUEST.SUCCESS:
      return meta.requestType === COMPANY_SEARCH.SUBMIT ?
        state.set('results', fromJS(payload)) :
        state;

    default:
      return state;
  }
}

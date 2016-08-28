import { fromJS } from 'immutable';
import { REQUEST } from '../actions/request';

const defaultState = fromJS({
  waiting: {},
  errors: {},
});

export default function reducer(state = defaultState, { payload, type, meta } = {}) {
  switch (type) {
    case REQUEST.START:
      return state.setIn(['waiting', meta.requestType], true);

    case REQUEST.SUCCESS:
      return state.setIn(['waiting', meta.requestType], false)
                  .setIn(['errors', meta.requestType], undefined);

    case REQUEST.ERROR:
      return state.setIn(
        ['errors', meta.requestType],
        fromJS(payload.message)
      )
      .setIn(['waiting', meta.requestType], false);

    default:
      return state;
  }
}
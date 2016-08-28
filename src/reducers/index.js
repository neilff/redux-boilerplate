import { combineReducers } from 'redux-immutable';

import request from './request';
import autocomplete from './autocomplete';

const rootReducer = combineReducers({
  request,
  autocomplete,
});

export default rootReducer;

import { REQUEST } from '../../actions/request';
import { call, cancelled, put } from 'redux-saga/effects';

export default function* requestSequence(callFn, meta) {
  yield put({ type: REQUEST.START, meta });

  try {
    const payload = yield call(...callFn);

    return yield put({ type: REQUEST.SUCCESS, meta, payload });
  } catch (error) {
    return yield put({ type: REQUEST.ERROR, meta, payload: error });
  } finally {
    if (yield cancelled()) {
      return yield put({ type: REQUEST.CANCEL, meta });
    }
  }
}
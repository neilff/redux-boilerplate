import { createStore, applyMiddleware, compose } from 'redux';

import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSagas from '../sagas';

import DevTools from '../containers/DevTools';

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const finalCreateStore = compose(
  applyMiddleware(logger, sagaMiddleware),
  DevTools.instrument()
)(createStore);

function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  }

  sagaMiddleware.run(...rootSagas);

  return store;
}

export default configureStore;

import { fromJS } from 'immutable';

const defaultOptions = fromJS({
  headers: {
    // Accept: 'application/json',
    // 'Content-Type': 'application/json',
  },
});

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json()
    .then(err => {
      throw err;
    });
}

function fetchr(endpoint, options = defaultOptions) {
  return fetch(`${ endpoint }`, options.toJS())
          .then(checkStatus)
          .then(res => res.json());
}

export function get(endpoint, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'GET');

  return fetchr(endpoint, options);
}

export function post(endpoint, body = {}, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'POST')
                                .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

export function put(endpoint, body = {}, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'PUT')
                                .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

export function destroy(endpoint, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'DELETE');

  return fetchr(endpoint, options);
}

let loadedStore = null;

if (process.env.NODE_ENV === 'production') {
  loadedStore = require('./configureStore.prod').default;
} else {
  loadedStore = require('./configureStore.dev').default;
}

export default loadedStore;

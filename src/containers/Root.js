let loadedModule = null;

if (process.env.NODE_ENV === 'production') {
  loadedModule = require('./Root.prod.js').default;
} else {
  loadedModule = require('./Root.dev.js').default;
}

export default loadedModule;

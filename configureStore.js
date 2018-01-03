import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer /* createMigrate */ } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import reducers from './reducers';

// const migrations = {
//   1: ({ _persist }) => ({ _persist }), // reset all state, except version
// };

const config = {
  key: 'mobile-flashcards:redux',
  storage,
  // version: 1,
  blacklist: ['form', 'quiz'],
  // migrate: createMigrate(migrations),
};

function configureStore() {
  const store = createStore(
    persistReducer(config, reducers),
    composeWithDevTools(applyMiddleware()),
  );

  const persistor = persistStore(store);

  return { persistor, store };
}

export default configureStore;

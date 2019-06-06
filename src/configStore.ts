import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { composeWithDevTools } from 'redux-devtools-extension';

import middleware from './utils/middleware';
import reducers from './store';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const enhancer = composeWithDevTools(compose(middleware));

  const store = createStore(persistedReducer, enhancer);

  const persistor = persistStore(store);

  return { store, persistor };
};

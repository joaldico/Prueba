import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducers';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// getDefatultMiddleware({})
const store = createStore(persistedReducer, {}, applyMiddleware(sagaMiddleware));

export const persist = persistStore(store);

export default store;

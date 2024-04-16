import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// getDefatultMiddleware({})
const store = createStore(persistedReducer, {}, applyMiddleware(sagaMiddleware));

export const persist = persistStore(store);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;

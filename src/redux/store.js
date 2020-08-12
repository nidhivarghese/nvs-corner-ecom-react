import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root.reducer';

//The middleware that the store is expecting from redux is an array
const middlewares = [logger];

// return value is applyMiddleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

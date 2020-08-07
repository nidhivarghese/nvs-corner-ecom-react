import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root.reducer';

//The middleware that the store is expecting from redux is an array
const middlewares = [logger];

// return value is applyMiddleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
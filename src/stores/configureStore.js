import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware';
import reducer from './modules/index';
import createLogger from 'redux-logger';

const logger = createLogger();

const middlewares = [
  applyMiddleware(
    thunk,
    promiseMiddleware,
    logger
  )
];

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(...middlewares)
  );


  return store;
}

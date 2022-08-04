import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { contactReducer } from './reducers/index';

const store = createStore(contactReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;

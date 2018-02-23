import { createStore, applyMiddleware, compose } from 'redux';
import { getStoredState } from 'redux-persist/es/getStoredState'
import { createPersistoid } from 'redux-persist/es/createPersistoid'
import storage from 'redux-persist/es/storages/local'

import rootReducer from '../combinedReducers';


import thunk from 'redux-thunk';
import logger from 'redux-logger'; 

import {loadState} from '../localStorage';


//import { routerMiddleware } from 'react-router-redux'
//import createHistory from 'history/createBrowserHistory'

//const history = createHistory()
//const persistedState = loadState();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

const middleware = [thunk,logger]

export default function configureStore() {

  //const store = createStoreWithMiddleware(rootReducer, initialState);
  const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
    
  )
  return store;
}
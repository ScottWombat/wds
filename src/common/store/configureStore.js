import { createStore, applyMiddleware, compose } from 'redux';


import rootReducer from './combinedReducers';


import thunk from 'redux-thunk';
import logger from 'redux-logger'; 

import {appMiddleware} from './appMiddleware';


//import { routerMiddleware } from 'react-router-redux'
//import createHistory from 'history/createBrowserHistory'

//const history = createHistory()
//const persistedState = loadState();

//const createStoreWithMiddleware = applyMiddleware(
//  thunk,
//  logger
//)(createStore);

const middleware = [appMiddleware,thunk,logger,]

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
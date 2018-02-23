import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';



import { Provider } from 'react-redux';
import _ from 'lodash';
import Immutable from 'immutable';
import Root from './containers/rootContainer';
import configureStore from './common/store/configureStore';
import ConnectedIntlProvider from './common/intlProvider';
import addLocaleData from './common/utils/localeDataManager';
import {PRODUCTS_RETRIEVAL} from './common/constants/ActionTypes';
import getProductList from './containers/gallery/retrieveProductAction';

import { bindActionCreators } from 'redux';

import {saveState} from './common/localStorage';

const history = createBrowserHistory();

const store = configureStore();

store.dispatch(getProductList('men'));
store.dispatch(getProductList('women'));

/*
store.subscribe(() =>{
        
});
*/
store.subscribe(() =>{
    const state = store.getState();
   
    /*
    Object.keys(state).forEach( key => {
        console.log(key);
        if(key === 'retrieveProductReducer'){
          const womenItems=JSON.stringify(state.retrieveProductReducer.womenProductList.data.productByProductType);
          const menItems=JSON.stringify(state.retrieveProductReducer.menProductList.data.productByProductType);
            console.log("KK:" +womenItems);
       //     saveState('womenProductList1',
       //     store.getState().retrieveProductReducer.womenProductList.data.productByProductType
       //     );
        }
    })
    */
});

addLocaleData();
render((
       <Provider store={ store }>
            <ConnectedIntlProvider>
            <BrowserRouter>
                
                <Root/>
                
            </BrowserRouter>
            </ConnectedIntlProvider>
        </Provider>
), document.querySelector('#app'))



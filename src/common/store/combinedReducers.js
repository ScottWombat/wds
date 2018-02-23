import {combineReducers} from 'redux';
//import {routerReducer} from 'react-router-redux';
//import { routerMiddleware } from 'react-router-redux'
//import createHistory from 'history/createBrowserHistory'

import countryReducer from '../../components/country/countryReducer';
import localeReducer from '../../components/i18n/localeReducer';
import pageNoReducer from '../../components/paging/pageNoReducer';
import addItemToCart from '../../containers/gallery/addItemToCartReducer';
import initialiseRecordsPerPageReducer from '../../components/paging/initialiseRecordsPerPageReducer';
import retrieveProductReducer from '../../containers/gallery/retrieveProductReducer';
import changeImageSourceReducer from '../../containers/gallery/changeImageSourceReducer';

import purchaseReducer from '../../containers/summary/purchaseReducer';


const rootReducer = combineReducers({
    countryReducer,
    localeReducer,
    pageNoReducer,
    retrieveProductReducer,
    initialiseRecordsPerPageReducer,
    //changeImageSourceReducer,
    addItemToCart,
    purchaseReducer
});

export default rootReducer;
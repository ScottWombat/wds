import {WOMEN_PRODUCTS_RETRIEVAL} from '../constants/ActionTypes';

export const appMiddleware = (store) => (next) => (action) => {
  console.log('type:' +action.type);
  if(action.type === WOMEN_PRODUCTS_RETRIEVAL) {
    console.log(action.womenProductList);
    if (localStorage.getItem('womenProductList') !== action.womenProductList) {
        localStorage.setItem('womenProductList', action.womenProductList);
    }
  }else{
       console.log("DDDDD>:" +action.menProductList);
      //if (localStorage.getItem('womanProductList') !== action.womanProductList) {
       // localStorage.setItem('womanProductList', action.womanProductList);
      // }
  }
  next(action);
}
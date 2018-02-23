import {MEN_PRODUCTS_RETRIEVAL,WOMEN_PRODUCTS_RETRIEVAL} from '../../common/constants/ActionTypes';
import axios from 'axios';

export default function getProductlist(productType){
    
     
     let configGraphQL={
           url: 'http://localhost:3000/graphql',
           method: 'post',
           data: {
                query:`query {
                    productByProductType(productType: "${productType}") {
                        id,
                        name,
                        price,
                        discount,
                        productType,
                        description,
                        image
                        }
                    }`
           }
       }
       return dispatch =>{
           if(productType === 'men'){
                axios(configGraphQL).then(response =>{
                    const menProductList = response.data;
                    dispatch(getMenProductListAsync(menProductList));
                }).catch(err =>{
                    console.log(err);
                });
           }else{
                axios(configGraphQL).then(response =>{
                    const womenProductList = response.data;
                    dispatch(getWomenProductListAsync(womenProductList));
                }).catch(err =>{
                    console.log(err);
                });
           }
       }

}

function getMenProductListAsync(menProductList){
    return {
        type:MEN_PRODUCTS_RETRIEVAL,
        menProductList
        
    }
}
function getWomenProductListAsync(womenProductList){
    return {
        type:WOMEN_PRODUCTS_RETRIEVAL,
        womenProductList
        
    }
}



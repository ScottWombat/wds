import {CUSTOMER_PURCHASE} from '../../common/constants/ActionTypes';
import axios from 'axios';

export function purchaseAction(customerInfo){
    
     var user={'id' : '1','firstName' : 'revit',
              'lastName' : 'Hathaisatpong',
              'pwd' : 'wre','email' : "030",'mobile': '0222','userType': 'customer'};
     let configGraphQL={
           url: 'http://localhost:3000/graphql',
           method: 'post',
           data: {
                query:`mutation {
                    addUser(userType: "${user}") {
                        id,
                        firstName,
                        lastName,
                        pwd,
                        email,
                        mobile,
                        userType
                        }
                    }`
           }
       }
       return (dispatch)  =>{
              
              axios(configGraphQL).then(response =>{
                    console.log(response);
                   dispatch(purchaseAsync(message));
                }).catch(err =>{
                    console.log(err);
                });
        
    
           
       }

}

export function purchaseAsync(message){
    console.log("DDDDEEEE")
    return {
        type:CUSTOMER_PURCHASE,
        message
        
    }
}


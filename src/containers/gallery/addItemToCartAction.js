import { ADD_TO_CART } from '../../common/constants/ActionTypes'

export default function addToCart(product){
  return {
        type: ADD_TO_CART,
        product
        
    }
}




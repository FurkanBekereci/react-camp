import { cartItems } from '../initialValues/cartItems';
import { ADD_TO_CART, REMOVE_FROM_CART } from './../actions/cartActions';

const initialState = {
    cartItems : cartItems
}

export default function cartReducer(state=initialState , {type , payload} ) {

    switch (type) {
        case ADD_TO_CART:
            
            let cartItem = state.cartItems.find(c => c.product.id === payload.id);
            if(cartItem){
                cartItem.quantity++;
                return {...state};
            } 

            return {
                ...state,
                cartItems : [{quantity: 1, product : payload}, ...state.cartItems]
            }

        case REMOVE_FROM_CART:
            
            
            return {
                ...state,
                cartItems : state.cartItems.filter(c => c.product.id !== payload.id)
            }

        default:
            return state;
    }
    
}
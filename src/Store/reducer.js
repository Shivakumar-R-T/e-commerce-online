import { initialState } from "./reduxstore";
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_Store, Clear_Cart } from './actions'


export const reducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_TO_Store:
            return {...state,
                products:[...action.payload]}
         case ADD_TO_CART:
            return {
                ...state,
                cart:[...state.cart,...action.payload]
            }       

            case REMOVE_FROM_CART:
                const newUpdatedCart=state.cart.filter((cartitem)=>{
                    if(cartitem.id!=action.payload.id)
                    {
                        return cartitem
                    }
                })
                return {...state,cart:[...newUpdatedCart]
                }
                case Clear_Cart:
                    return {...state,
                        cart:[]}



        default:
            return state;
    }

}
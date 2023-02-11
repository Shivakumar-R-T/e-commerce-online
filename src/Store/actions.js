export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_Store = "ADD_TO_Store";
export const Clear_Cart = "Clear_Cart";

export const addtoCart=(payload)=>{
    return {
        type:ADD_TO_CART,
        payload:payload
    }
}

export const removeFromCart=(payload)=>{
    return {
        type:REMOVE_FROM_CART,
        payload:payload
    }
}

"use strict"
export function cartReducers(state={cart:[]}, action){
    
    switch(action.type){
        case "ADD_TO_CART":
            return {...state.cart, cart:action.payload}
        break;
        case "DELETE_CART_ITEM":
            return {...state.cart, cart:action.payload}
        break;
        }
    return state;
}
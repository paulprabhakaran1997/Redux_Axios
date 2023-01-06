import { ActionTypes } from "../constants/action-ypes"

export const setProducts = (products) =>{
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
} 

export const selectedProducts = (products) =>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : products
    }
}
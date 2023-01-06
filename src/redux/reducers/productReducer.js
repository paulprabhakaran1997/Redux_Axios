import { ActionTypes } from "../constants/action-ypes"

const initialState = {
    products : [
        {
            id : 1,
            title : 'Paul',
            category : "Programmer"
        }
    ]
}

export const productReducer = (state = initialState , action) =>{
    const { type , payload } = action
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            // return {...state , products : [...state.products , payload]}
            return state
        default:
            return state 
    }
}
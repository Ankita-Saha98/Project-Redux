import {ADD_TO_CART,REMOVE_TO_CART,SET_QUANTITY_TO_CART} from '../constants'
export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:REMOVE_TO_CART,
        data: data
    }
}

export const setQuantityToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:SET_QUANTITY_TO_CART,
        data: data
    }
}




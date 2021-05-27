import { ADD_TO_CART, REMOVE_TO_CART } from '../constants'
const initialState = []
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            let index = state.findIndex(e => e.initialState.id === action.data.id);
            if(index !== -1){
                state[index].initialState.quantity++;
            }
            else{
                return [
                    ...state,
                    {initialState: action.data}
                ]
            }
        case REMOVE_TO_CART:
            let indexRemove = state.findIndex(e => e.initialState.id === action.data);
            if(indexRemove !== -1){
                if(state[indexRemove].initialState.quantity === 1){
                    state.splice(indexRemove,1);
                }
                else{
                    state[indexRemove].initialState.quantity--;
                }
            }
            return[
                ...state,
            ]
        default:
            return state
    }


}




















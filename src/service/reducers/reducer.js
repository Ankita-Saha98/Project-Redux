import { ADD_TO_CART, REMOVE_TO_CART } from '../constants'
const initialState = []
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            var temp=0;
            for(var i = 0;i<state.length;i++){
                if(state[i].initialState.id===action.data.id)
                {
                    state[i].initialState.quantity++;
                    temp=1;
                    break;
                    
                }
            }
            if(temp!==1){
                return [
                    ...state,
                    {initialState: action.data}
                ]
            }
        case REMOVE_TO_CART:
            for(var i = 0;i<state.length;i++){
                if(state[i].initialState.id===action.data)
                {
                    if(state[i].initialState.quantity===1){
                        state.splice(i,1);
                    }
                    else{
                        state[i].initialState.quantity--;
                    }
                    break;
                    
                }
            }
            return[
                ...state,
            ]
        default:
            return state
    }


}


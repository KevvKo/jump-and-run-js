const initialState = {
    keys: []
}

export default function keysReducer(state = initialState, action){

    if(action.type === "keys/addKey"){
       
        state.keys[action.payload] = true 

        return {
           keys: [ action.key = true, ...state.keys]
        }
    } 

    if(action.type === "keys/removeKey"){
        return state.keys[action.payload] = false
    }

    return state;
}
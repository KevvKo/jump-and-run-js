const initialState =  {}

export default function keysReducer(state = initialState, action){

    if(action.type === "keys/KEY_IS_DOWN"){

        const keys = {...state}
        keys[action.payload] = true
        console.log(keys)
        return keys
    } 

    if(action.type === "keys/KEY_IS_UP"){

        const keys = {...state}
        keys[action.payload] = false
        return keys
        
    }

    return state;
}
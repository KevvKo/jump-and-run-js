const initialState= {}

function canvasReducer( state = initialState, action) {

    if(action.type === 'keys/KeyDown'){

        const keys = {...state}
        keys[action.payload] = true
        return keys
    }

    if(action.type === 'keys/KeyUp'){

        const keys = {...state}
        keys[action.payload] = false
        return keys
    }

    return state;
}

export default canvasReducer
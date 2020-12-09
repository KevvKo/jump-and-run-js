const initialState= {
    keys: {}
}

function canvasReducer( state = initialState, action) {

    if(action.type === 'keys/KeyDown'){
        const keys = {...state}
        keys[action.key] = true

        return keys
    }

    if(action.type === 'keys/KeyUp'){

        const keys = {...state}
        keys[action.key] = false

        return keys
    }

    return state;
}

export default canvasReducer
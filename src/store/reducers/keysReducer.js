const initialState= {};

function canvasReducer( state = initialState, action) {
    
    const keys = {...state};

    switch(action.type)  {
        
        case 'keys/KeyDown':

            keys[action.payload] = true;
            return keys;

        case 'keys/KeyUp':

            keys[action.payload] = false;
            return keys;
    
        default:
            return state;
    }
}

export default canvasReducer;
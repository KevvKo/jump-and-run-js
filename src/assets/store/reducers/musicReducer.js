const initialState= {
    artist: '',
    title: '',
    musicPlays: false
}

export default function musicReducer( state = initialState, action) {
    
    if(action.type === ''){
        return{
            ...state,
            gameIsPaused: true
        }
    }

    if(action.type === ''){
        return{
            ...state
        }
    }

    return state;
}
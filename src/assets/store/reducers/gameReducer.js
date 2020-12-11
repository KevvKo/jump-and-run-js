const initialState= {
    gameIsPaused: false
}

export default function gameReducer( state = initialState, action) {
    
    if(action.type === 'game/PauseGame'){
        return{
            ...state,
            gameIsPaused: true
        }
    }

    if(action.type === 'game/ContinueGame'){
        return{
            ...state,
            gameIsPaused: false
        }
    }

    return state;
}
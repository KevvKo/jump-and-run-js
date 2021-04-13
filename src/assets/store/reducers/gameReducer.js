const initialState= {
    gameIsPaused: false
}

export default function gameReducer( state = initialState, action) {
    
    switch(action.type){

        case 'game/PauseGame':
            return{
                ...state,
                gameIsPaused: action.payload
            }

        case 'game/ContinueGame':
            return{
                ...state,
                gameIsPaused: action.payload
            }
    }

    return state;
}
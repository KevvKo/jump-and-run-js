const initialState= {
    gameIsPaused: false,
    gameIsOver: false
};

export default function gameReducer( state = initialState, action) {
    
    switch(action.type){

        case 'game/pauseGame':
            return {
                ...state,
                gameIsPaused: action.payload
            };

        case 'game/continueGame':
            return {
                ...state,
                gameIsPaused: action.payload
            };

        case 'game/difficulty':
            return {
                ...state,
                difficulty: action.payload
            };

        case 'game/gameOver':
            return {
                ...state,
                gameIsOver: action.payload
            };
        
        case 'game/resetGame':
            return {
                ...state,
                gameIsOver: action.payload
            };
        default:
            return state;
    }
}
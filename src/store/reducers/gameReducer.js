const initialState= {
    gameIsPaused: false
};

export default function gameReducer( state = initialState, action) {
    
    switch(action.type){

        case 'game/pauseGame':
            return{
                ...state,
                gameIsPaused: action.payload
            };

        case 'game/continueGame':
            return{
                ...state,
                gameIsPaused: action.payload
            };

            default:
                return state;
    }
}
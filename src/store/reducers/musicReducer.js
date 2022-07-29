const initialState= {
    artist: '',
    title: '',
    musicPlays: false
};

export default function musicReducer( state = initialState, action) {
    
    switch(action.type){

        case 'music/changeArtist':

            return {
                ...state,
                artist: action.payload
            };
    
        case 'music/changeTitle':
                
            return {
                ...state,
                title: action.payload
            };
        
        case 'music/stopMusic':
        
            return {
                ...state,
                musicPlays: action.payload
            };
    
        case 'music/playMusic':
            
            return {
                ...state,
                musicPlays: action.payload
            };

        default:
            return state;
    }
}
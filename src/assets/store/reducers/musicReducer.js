const initialState= {
    artist: '',
    title: '',
    musicPlays: false
}

export default function musicReducer( state = initialState, action) {
    
    if(action.type === 'music/changeArtist'){
        const musicState = {...state}
        musicState.artist = action.payload
        return musicState
    }

    if(action.type === 'music/changeTitle'){
        const musicState = {...state}
        musicState.title = action.payload
        return musicState
    }

    if(action.type === 'music/changeMusicPlays'){
        const musicState = {...state}
        musicState.musicPlays = action.payload
        return musicState
    }

    return state;
}
import {
    REPLACE_ARTIST_NAME,
    REPLACE_TITLE_NAME, 
    STOP_MUSIC, 
    PLAY_MUSIC 
} from './actionNames'

export const replaceArtistName = (artist) => {
    return {
        type: REPLACE_ARTIST_NAME,
        payload: artist 
    }
} 

export const replaceTitleName = (title) => {
    return {
        type: REPLACE_TITLE_NAME,
        payload: title
    }
} 

export const stopMusic = () => {
    return {
        type: STOP_MUSIC,
        payload: false
    }
} 

export const playMusic = () => {
    return {
        type: PLAY_MUSIC,
        payload: true
    }
} 
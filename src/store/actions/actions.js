// key-actions
export const ADD_KEYDOWN = {type: 'keys/KeyDown', payload: String}
export const ADD_KEYUP = {type: 'keys/KeyUp', payload: String}
// game-actions
export const PAUSE_GAME = {type: 'game/pauseGame', payload: true}
export const CONTINUE_GAME = {type: 'game/ContinueGame', payload: false}
// music-actions
export const REPLACE_ARTIST_NAME = {type: 'music/changeArtist', payload: String}
export const REPLACE_TITLE_NAME = {type: 'music/changeTitle', payload: String}
export const STOP_MUSIC = {type: 'music/stopMusic', payload: false}
export const PLAY_MUSIC = {type: 'music/playMusic', payload: true}
// canvas-actions
export const SCALE_CANVAS = {type: 'canvas/Scale'}
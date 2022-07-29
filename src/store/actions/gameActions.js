import {
    PAUSE_GAME,
    CONTINUE_GAME
} from './actionNames';

export const pauseGame = () => {
    return {
        type: PAUSE_GAME,
        payload: true
    };
};

export const continueGame = () => {
    return {
        type: CONTINUE_GAME,
        payload: false
    };
};
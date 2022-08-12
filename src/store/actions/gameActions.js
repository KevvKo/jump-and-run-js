import {
    PAUSE_GAME,
    CONTINUE_GAME,
    ADD_DIFFICULTY
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

export const addDifficulty = (difficulty) => {
    return {
        type: ADD_DIFFICULTY,
        payload: difficulty
    }
}
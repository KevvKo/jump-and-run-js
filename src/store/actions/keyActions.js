import {
    ADD_KEYDOWN,
    ADD_KEYUP
} from './actionNames';

export const addKeyDown = (key) => {
    return {
        type: ADD_KEYDOWN,
        payload: key
    };
};

export const addKeyUp = (key) => {
    return {
        type: ADD_KEYUP,
        payload: key
    };
};
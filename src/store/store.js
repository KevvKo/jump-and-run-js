import { configureStore } from "@reduxjs/toolkit";
import canvasReducer  from './reducers/canvasReducer';
import keysReducer from './reducers/keysReducer';
import gameReducer from './reducers/gameReducer';
import musicReducer from './reducers/musicReducer';

const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        keys: keysReducer,
        game: gameReducer,
        music: musicReducer
    }
});

export {store};
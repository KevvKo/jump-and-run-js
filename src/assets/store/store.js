import { configureStore } from "@reduxjs/toolkit";
import canvasReducer  from './reducers/canvasReducer'
import keysReducer from './reducers/keysReducer'
import gameReducer from './reducers/gameReducer'

const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        keys: keysReducer,
        game: gameReducer

    }
});

export {store};
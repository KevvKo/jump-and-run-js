import { configureStore} from "@reduxjs/toolkit";
import canvasReducer  from './reducers/canvasReducer'
import keysReducer from './reducers/keysReducer'

const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        keys: keysReducer
    }
    });

export {store};
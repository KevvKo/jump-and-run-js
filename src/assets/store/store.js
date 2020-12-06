import { configureStore} from "@reduxjs/toolkit";
import canvasReducer  from './reducers/canvasReducer'

const store = configureStore({
    reducer: {
        canvas: canvasReducer
    }
    });

export {store};
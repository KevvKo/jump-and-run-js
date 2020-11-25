import { configureStore} from "@reduxjs/toolkit";
import canvasReducer  from './reducers/canvasReducer'

const store = configureStore({reducer: canvasReducer});

export {store};
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./Feature/Product/ProductSlice";



  
const rootReducers = combineReducers({
    productReducer,

})

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
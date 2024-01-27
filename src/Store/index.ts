import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./Feature/Product/ProductSlice";
import {advertisingReducer} from './Feature/Advertising/AdvertisingSlice'


  
const rootReducers = combineReducers({
    productReducer,
    advertisingReducer
})

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
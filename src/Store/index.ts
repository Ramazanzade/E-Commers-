import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./Feature/Product/ProductSlice";
import {advertisingReducer} from './Feature/Advertising/AdvertisingSlice'
import { cupponReducer } from "./Feature/Cuppon/CupponSlice";

  
const rootReducers = combineReducers({
    productReducer,
    advertisingReducer,
    cupponReducer
})

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./Feature/Product/ProductSlice";
import {advertisingReducer} from './Feature/Advertising/AdvertisingSlice'
import { cupponReducer } from "./Feature/Cuppon/CupponSlice";
import { userReducer } from "./Feature/User/UserSlice";
import { ProfileListReducer } from "./Feature/Profile_List/Profile_ListSlice";
// import {OnboardingReducer} from './Feature/Onboarding/OnboardingSlice'
const rootReducers = combineReducers({
    productReducer,
    advertisingReducer,
    cupponReducer,
    userReducer,
    ProfileListReducer,
    // OnboardingReducer
})

export const store = configureStore({
    reducer: rootReducers,
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
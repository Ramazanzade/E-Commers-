import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
        { id: 1, text: 'Corporate compliments211', des: 'order from 10 mini bouquets'},
        { id: 2, text: 'Corporate compliments2356', des: 'order from 10 mini bouquets'},
        { id: 3, text: 'Corporate compliments88', des: 'order from 10 mini bouquets'},
        { id: 4, text: 'Corporate compliments2392ue', des: 'order from 10 mini bouquets'},
        { id: 5, text: 'Corporate compliments9', des: 'order from 10 mini bouquets'},

]

export const advertisingSlice = createSlice({
    name: 'advertising',
    initialState: { value: initialStateValue },
    reducers: {
        advertisingaction: (state, action) => {
            state.value = action.payload

        }
    }
})

export const advertisingReducer = advertisingSlice.reducer
export const { advertisingaction } = advertisingSlice.actions
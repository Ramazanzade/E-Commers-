import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
        { id: 1, text: 'Narmin01', des: '50% discount with promo code on first order'},
]

export const cupponSlice = createSlice({
    name: 'cuppon',
    initialState: { value: initialStateValue },
    reducers: {
        cupponaction: (state, action) => {
            state.value = action.payload

        }
    }
})

export const cupponReducer = cupponSlice.reducer
export const { cupponaction } = cupponSlice.actions
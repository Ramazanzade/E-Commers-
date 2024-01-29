import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
        { id: 1, name: 'Narmin', surname:'Abdullayeva', des: '2972 Westheimer Rd. Santa Ana, Illinois 85486 '},
]

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialStateValue },
    reducers: {
        useraction: (state, action) => {
            state.value = action.payload

        }
    }
})

export const userReducer = userSlice.reducer
export const { useraction } = userSlice.actions








 
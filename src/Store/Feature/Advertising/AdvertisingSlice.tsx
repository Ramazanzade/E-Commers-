import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
        { id: 1, text: 'Corporate compliments', des: 'order from 10 mini bouquets', imge: require('../../../assets/imge/image 1.svg') },
        { id: 2, text: 'Corporate compliments', des: 'order from 10 mini bouquets', imge: require('../../../assets/imge/image 1.svg') },
        { id: 3, text: 'Corporate compliments', des: 'order from 10 mini bouquets', imge: require('../../../assets/imge/image 1.svg') },
        { id: 5, text: 'Corporate compliments', des: 'order from 10 mini bouquets', imge: require('../../../assets/imge/image 1.svg') },
        { id: 6, text: 'Corporate compliments', des: 'order from 10 mini bouquets', imge: require('../../../assets/imge/image 1.svg') },
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
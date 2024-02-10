import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = [
    { id: 1,  text:'My Orders', screenname: "OrdersScreen", icon: 'truck' },
    { id: 2,  text:'Favorites', screenname: "FavoritesScreen", icon: 'heart' },
    { id: 3,  text:'My reviews', screenname: "ReviewsScreen",icon: 'star' },
    { id: 4,  text:'My Informations', screenname: "InformationsScreen",icon:'add' },
    { id: 5,  text:'Messages', screenname: "MessagesScreen",icon:'messages' },
    { id: 6,  text:'Cupons', screenname: "CuponsScreen", icon:'ticket'},
    { id: 7,  text:'Reminders', screenname: "RemindersScreen", icon:'clock'},
    { id: 8,  text:'Registered Cards', screenname: "RegisteredScreen",icon:'card' },
    { id: 9,  text:'My Wallet', screenname: "WalletScreen", icon:'wallet' },
    { id: 10, text:'Collections', screenname: "CollectionsScreen", icon:'forward'},
    { id: 11, text:'Notifications', screenname: "NotificationsScreen",icon:"notification" },
    { id: 12, text:'Live Support', screenname: "SupportScreen", icon:'crd'},
    { id: 13, text:'Help', screenname: "HelpScreen",icon:'question' },
    { id: 14, text:'Campaigns', screenname: "CampaignsScreen", icon:'percentage'},

]

export const ProfileListSlice = createSlice({
    name: 'profile',
    initialState: { value: initialStateValue },
    reducers: {
        profilelistaction: (state, action) => {
            state.value = action.payload

        }
    },

})

export const ProfileListReducer = ProfileListSlice.reducer
export const { profilelistaction } = ProfileListSlice.actions
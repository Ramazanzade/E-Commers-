import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../../Container/Profile/Profile';
import Favorit from '../../../Container/Favorit/Favorit';
const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Favorit" component={Favorit} />
        </Stack.Navigator>
    )
}

export default ProfileScreen
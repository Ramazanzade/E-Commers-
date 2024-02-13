import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account_Setup from '../../../Container/Account_Setup/Account_Setup';
import Splas_Loading from '../../../Constans/Splas_Loading/Splas_Loading';
const Stack = createNativeStackNavigator();
const AccountSetupScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Account_Setup" component={Account_Setup} />
        </Stack.Navigator>
    )
}

export default AccountSetupScreen
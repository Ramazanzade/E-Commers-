import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../../../Container/Onboarding/Onboarding';
import Splas_Loading from '../../../Constans/Splas_Loading/Splas_Loading';
const Stack = createNativeStackNavigator();
const OnboardingScreen = ({navigation}:any) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
    )
}

export default OnboardingScreen
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splas from '../../../Container/Splas/Splas';
import Splas_Loading from '../../../Constans/Splas_Loading/Splas_Loading';
const Stack = createNativeStackNavigator();
const SplasScreen = ({ navigation }: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('OnboardingScreen');
        }, 6000);

    }, []);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splas" component={Splas} />
            <Stack.Screen name="Splas_Loading" component={Splas_Loading} />
        </Stack.Navigator>
    )
}

export default SplasScreen
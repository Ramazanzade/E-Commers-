import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forgot from '../../../Container/Forgot-Otp/Forgot'
import OTP from '../../../Container/Forgot-Otp/OTP';
import New_Password from '../../../Container/Forgot-Otp/New_Password';
const Stack = createNativeStackNavigator();
const ForgotOtpScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="New_Password" component={New_Password} />
        </Stack.Navigator>
    )
}

export default ForgotOtpScreen
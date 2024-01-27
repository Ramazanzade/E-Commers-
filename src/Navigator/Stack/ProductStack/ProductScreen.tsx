import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../../../Container/Product/Product';
const Stack = createNativeStackNavigator();
const ProductScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}

export default ProductScreen
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabbar from './src/Navigator/Tabbar/Tabbar';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src//Store/index';
import ProductScreen from './src/Navigator/Stack/ProductStack/ProductScreen';
import FavoritScreen from './src/Navigator/Stack/FavoritStack/FavoritScreen'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Tabbar" component={Tabbar} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} /> */}
        <Stack.Screen name="FavoritScreen" component={FavoritScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BigApp = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

export default BigApp;
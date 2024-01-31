import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabbar from './src/Navigator/Tabbar/Tabbar';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src//Store/index';
import ProductScreen from './src/Navigator/Stack/ProductStack/ProductScreen';
import FavoritScreen from './src/Navigator/Stack/FavoritStack/FavoritScreen'
import AddBasket_List from './src/Component/AddBasket_List/AddBasket_List';
import AddtoBasket_Button from './src/Component/AddtoBasket_Button/AddtoBasket_Button';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabbar" component={Tabbar} />
        <Stack.Screen name="AddtoBasket_Button" component={AddtoBasket_Button} />
        <Stack.Screen name="AddBasket_List" component={AddBasket_List} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        {/* <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} /> */}

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
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
import SplaScreen from './src/Navigator/Stack/SplasStack/SplasScreen'
import OnboardingScreen from './src/Navigator/Stack/OnboardingStack/OnboardingScreen'
import LoginScreen from './src/Navigator/Stack/LoginStack/LoginScreen'
import RegisterScreen from './src/Navigator/Stack/RegisterStack/RegisterScreen'
import AccountSetupScreen from './src/Navigator/Stack/AccountSetupStack/AccountSetupScreen'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Tabbar" component={Tabbar} />
        <Stack.Screen name="AddtoBasket_Button" component={AddtoBasket_Button} />
        <Stack.Screen name="AddBasket_List" component={AddBasket_List} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} /> */}
        {/* <Stack.Screen name="SplaScreen" component={SplaScreen} /> */}
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="AccountSetupScreen" component={AccountSetupScreen} /> */}
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
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
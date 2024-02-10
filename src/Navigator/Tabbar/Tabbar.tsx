import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabbarcss from './tabbarcss';
import HomeScreen from '../Stack/HomeStack/HomeScreen';
import CatalogScreen from '../Stack/CatalogStack/CatalogScreen';
import BasketScreen from '../Stack/BasketStack/BasketScreen';
import ProfileScreen from '../Stack/ProfileStack/ProfileScreen';
import HomeIcon from '../../assets/icon/home-2-outline.svg';
import CatalogIcon from '../../assets/icon/box-searcha.svg';
import CartIcon from '../../assets/icon/bag2.svg';
import ProfileIcon from '../../assets/icon/userq.svg';
import HomeIcon1 from '../../assets/icon/home-2.svg';
import CatalogIcon1 from '../../assets/icon/box-search.svg';
import CartIcon1 from '../../assets/icon/bag.svg';
import ProfileIcon1 from '../../assets/icon/user.svg';
const Tab = createBottomTabNavigator();


const Tabbar = ({navigation}:any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route}: any) => ({
        headerShown: false,
        tabBarActiveTintColor:'red',
        tabBarStyle: {
          height: 50,
          shadowOffset: {
            width: 0,
            height: 30,
          },
        },
        tabBarIcon: ({ color, size, focused }: any) => {
          let IconComponent: any;

          if (route.name === 'Home') {
            IconComponent = focused ? HomeIcon1 : HomeIcon;
          } else if (route.name === 'Catalog') {
            IconComponent = focused ? CatalogIcon1 : CatalogIcon;
          } else if (route.name === 'Basket') {
            IconComponent = focused ? CartIcon1 : CartIcon;
          } else if (route.name === 'Profile') {
            IconComponent = focused ? ProfileIcon1 : ProfileIcon;
          }

          return <IconComponent color={focused ? "green" : "red"} size={35} />;
        },
        tabBarShowLabel: true,      
        
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Basket" component={BasketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Tabbar;
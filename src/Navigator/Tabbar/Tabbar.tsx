import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabbarcss from './tabbarcss';
import HomeScreen from '../Stack/HomeStack/HomeScreen';
import CatalogScreen from '../Stack/CatalogStack/CatalogScreen';
import CartScreen from '../Stack/CartStack/CartScreen';
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


const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }:any) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        tabBarIcon: ({ color, size, focused }:any) => {
          let IconComponent: any;

          if (route.name === 'HomeScreen') {
            IconComponent = focused ? HomeIcon1 : HomeIcon;
          } else if (route.name === 'CatalogScreen') {
            IconComponent = focused ? CatalogIcon1 : CatalogIcon;
          } else if (route.name === 'CartScreen') {
            IconComponent = focused ? CartIcon1 : CartIcon;
          } else if (route.name === 'ProfileScreen') {
            IconComponent = focused ? ProfileIcon1 : ProfileIcon;
          }

          return <IconComponent color={focused ? "#306B60" : "gray"} size={35} />;
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CatalogScreen" component={CatalogScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Tabbar;
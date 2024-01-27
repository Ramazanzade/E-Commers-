// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../Stack/HomeStack/HomeScreen';
// import CatalogScreen from '../Stack/CatalogStack/CatalogScreen';
// import CartScreen from '../Stack/CartStack/CartScreen';
// import ProfileScreen from '../Stack/ProfileStack/ProfileScreen';
// import { ReactComponent as HomeIcon } from '../../assets/icon/home-2-outline.svg';
// import { ReactComponent as CatalogIcon } from '../../assets/icon/bag.svg';
// import { ReactComponent as CartIcon } from '../../assets/icon/card-pos.svg';
// import {ReactComponent as ProfileIcon } from '../../assets/icon/user.svg';

// const Tab = createBottomTabNavigator();

// const iconMap:any = {
//   HomeScreen: HomeIcon,
//   CatalogScreen: CatalogIcon,
//   CartScreen: CartIcon,
//   ProfileScreen: ProfileIcon,
// };

// const Tabbar = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           height: 70,
//           shadowOffset: {
//             width: 0,
//             height: 0,
//           },
//         },
//         tabBarIcon: ({ color, size, focused }) => {
//           const IconComponent = iconMap[route.name];
//           return <IconComponent color={focused ? "#306B60" : "gray"} size={35} />;
//         },
//         tabBarShowLabel: false,
//       })}
//     >
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="CatalogScreen" component={CatalogScreen} />
//       <Tab.Screen name="CartScreen" component={CartScreen} />
//       <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// export default Tabbar;




import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEarthOceania, faHome, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope, faBookmark } from '@fortawesome/free-regular-svg-icons';
import HomeScreen from '../Stack/HomeStack/HomeScreen';
import CatalogScreen from '../Stack/CatalogStack/CatalogScreen';
import CartScreen from '../Stack/CartStack/CartScreen';
import ProfileScreen from '../Stack/ProfileStack/ProfileScreen';
import tabbarcss from './tabbarcss';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

const Tab = createBottomTabNavigator();

const Tabbar = ({ route }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: IconDefinition | undefined;
          if (route.name === 'HomeScreen') {
            iconName = faHome;
          } else if (route.name === 'CatalogScreen') {
            iconName = faEnvelope;
          } else if (route.name === 'CartScreen') {
            iconName = faBookmark;
          } else if (route.name === 'ProfileScreen') {
            iconName = faUser;
          }

          const iconColor = focused ? "#306B60" : "gray";
          const icon = iconName || faEarthOceania; 

          return <FontAwesomeIcon icon={icon} style={tabbarcss.tabIcon} size={35} color={iconColor} />;
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
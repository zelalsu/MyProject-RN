import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Route

// Type
import {DrawerStackParams, RootStackParams} from './types';

import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../screen/LoginScreen/LoginScreen';
import {TabNavigator} from './tabRoutes';
import MainScreen from '../screen/MainScreen/MainScreen';

const Root = createNativeStackNavigator<RootStackParams>();
const Auth = createNativeStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator<DrawerStackParams>();

export function RootNavigator() {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {/* <Root.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      <Root.Screen name="TabNavigator" component={TabNavigator} />
    </Root.Navigator>
  );
}

export function AuthNavigator() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {/* <Auth.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
    </Auth.Navigator>
  );
}

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           //   width: window.width - 65,
//           backgroundColor: 'transparent',
//         },
//         drawerType: 'front',
//       }}
//       //   drawerContent={(props) => SideBar(props)}
//     >
//       {/* <Drawer.Screen name="ProfilScreen" component={ProfilScreen} />
//       <Drawer.Screen name="ApplicationScreen" component={ApplicationScreen} />
//       <Drawer.Screen name="WishlistScreen" component={WishlistScreen} />
//       <Drawer.Screen
//         name="CommunicationScreen"
//         component={CommunicationScreen}
//       /> */}
//     </Drawer.Navigator>
//   );
// };

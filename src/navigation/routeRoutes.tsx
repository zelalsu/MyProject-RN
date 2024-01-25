import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Route

// Type
import {DrawerStackParams, RootStackParams} from './types';

import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../screen/LoginScreen/LoginScreen';
import {TabNavigator} from './tabRoutes';
import MainScreen from '@src/screen/MainScreen/MainScreen';
import SplashScreen from '@src/screen/SplashScreen';
import DrawerBar from '@src/components/Drawer';
import {window} from '@src/constant/dimension';
import ProductScreen from '@src/screen/ProductScreen/ProductScreen';
import DenemeScreen from '@src/screen/DenemeScreen';
import {useTheme} from '@react-navigation/native';
import {MyTheme} from '../constant/types';
import ProfileScreen from '@src/screen/ProfileScreen';
import ContactScreen from '@src/screen/ContactScreen';
import CustomerDetails from '../screen/MainCategories/CustomerScreen/CustomerDetails/index';

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
      <Root.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Root.Screen name="TabNavigator" component={TabNavigator} />

      <Root.Screen
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
        name="DenemeScreen"
        component={DenemeScreen}
      />

      <Root.Screen
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
        name="CustomerDetails"
        component={CustomerDetails}
      />
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
      <Auth.Screen name="SplashScreen" component={SplashScreen} />
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
    </Auth.Navigator>
  );
}

export const DrawerNavigator = () => {
  const theme = useTheme() as unknown as MyTheme; // useTheme'in döndüğü tipi MyTheme olarak belirtin

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: window.width - 65,
          backgroundColor: 'transparent',
        },
        drawerType: 'front',
      }}
      drawerContent={props => DrawerBar(props)}>
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />

      <Drawer.Screen name="ContactScreen" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

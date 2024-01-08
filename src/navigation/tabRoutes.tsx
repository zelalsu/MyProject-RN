import React from 'react';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Component

// Type
import {MainStackParams, TabStackParams} from './types';

// Screen

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from '../screen/ProductScreen/ProductScreen';
import MainScreen from '../screen/MainScreen/MainScreen';
import {DrawerNavigator} from './routeRoutes';
import BranchScreen from '@src/screen/BranchScreen';
import DenemeScreen from '@src/screen/DenemeScreen';
import NewsScreen from '@src/screen/NewsScreen';
import TabBar from '@src/components/TabBar';

const Tab = createBottomTabNavigator<TabStackParams>();
const Stack = createNativeStackNavigator<MainStackParams>();

// Sub Navigator
export const TabNavigator = () => {
  // tabBar
  //   const tabBar = (props: BottomTabBarProps) => {
  //     return <TabBar {...props} />;
  //   };

  const tabBar = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  const options: BottomTabNavigationOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator
      tabBar={tabBar}
      screenOptions={options}
      // initialRouteName="MainNavigator" // Bu satırı ekledik
    >
      <Tab.Screen
        options={{tabBarLabel: 'Sayfa 1'}}
        name="BranchScreen"
        component={BranchScreen}
      />
      <Tab.Screen name="MainNavigator" component={MainNavigator} />

      <Tab.Screen
        options={{tabBarLabel: 'Sayfa 2'}}
        name="ProductScreen"
        component={ProductScreen}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NewScreen" component={NewsScreen} />
    </Stack.Navigator>
  );
};

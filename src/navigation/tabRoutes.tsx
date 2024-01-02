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

const Tab = createBottomTabNavigator<TabStackParams>();
const Stack = createNativeStackNavigator<MainStackParams>();

// Sub Navigator
export const TabNavigator = () => {
  // tabBar
  //   const tabBar = (props: BottomTabBarProps) => {
  //     return <TabBar {...props} />;
  //   };

  const options: BottomTabNavigationOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator screenOptions={options}>
      {/* <Tab.Screen name="MainNavigator" component={MainNavigator} /> */}
      <Tab.Screen
        options={{tabBarLabel: 'Main '}}
        name="MainScreen"
        component={MainScreen}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Product'}}
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
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

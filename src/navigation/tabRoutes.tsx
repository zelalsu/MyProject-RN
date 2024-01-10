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

import BranchScreen from '@src/screen/BranchScreen';
import NewsScreen from '@src/screen/NewsScreen';
import TabBar from '@src/components/TabBar';
import DenemeScreen from '@src/screen/DenemeScreen';

const Tab = createBottomTabNavigator<TabStackParams>();
const Stack = createNativeStackNavigator<MainStackParams>();

// Sub Navigator
export const TabNavigator = () => {
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
        options={{tabBarLabel: 'BranchScreen'}}
        name="BranchScreen"
        component={BranchScreen}
      />
      <Tab.Screen name="MainNavigator" component={MainNavigator} />

      <Tab.Screen
        options={{tabBarLabel: 'ProductScreen'}}
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
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="NewScreen" component={NewsScreen} />
      <Stack.Screen name="DenemeScreen" component={DenemeScreen} />
      {/* <Stack.Screen
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
        name="BranchScreen"
        component={BranchScreen}
      /> */}
    </Stack.Navigator>
  );
};

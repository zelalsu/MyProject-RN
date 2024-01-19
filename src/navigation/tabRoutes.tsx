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

import NewsScreen from '@src/screen/ContactScreen';
import TabBar from '@src/components/TabBar';
import CustomerScreen from '@src/screen/MainCategories/CustomerScreen';
import ReportScreen from '@src/screen/MainCategories/ReportScreen';
import OrderScreen from '@src/screen/MainCategories/OrderScreen';

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
        options={{tabBarLabel: 'Müşterilerim'}}
        name="CustomerScreen"
        component={CustomerScreen}
      />
      <Tab.Screen name="MainNavigator" component={MainNavigator} />

      <Tab.Screen
        options={{tabBarLabel: 'Ürünlerim'}}
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
      <Stack.Screen name="OrderScreen" component={OrderScreen} />

      <Stack.Screen
        options={{animation: 'slide_from_bottom', presentation: 'modal'}}
        name="ReportScreen"
        component={ReportScreen}
      />
    </Stack.Navigator>
  );
};

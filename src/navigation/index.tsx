import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

// Route
import * as navigator from './routeRoutes';

// Constant

import {useAppSelector} from '../store';
import {colorsDarks, colorsLight} from '../constant/colors';

const Stack = createNativeStackNavigator();

const routeHandler = (routeName: string) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name={routeName}
        component={navigator[routeName as keyof typeof navigator]}
      />
    </Stack.Navigator>
  );
};
function RootNavigator() {
  const routeName = useAppSelector(state => state.route.path);
  return routeHandler(routeName);
}

export default function Navigation() {
  const themePreference = useAppSelector(state => state.theme.mode);

  const scheme = useColorScheme();
  const themeMode = themePreference === 'system' ? scheme : themePreference;

  const myTheme =
    themeMode === 'light'
      ? {
          ...DefaultTheme,
          ...colorsLight,
        }
      : {
          ...DarkTheme,
          ...colorsDarks,
        };

  return (
    <NavigationContainer theme={myTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

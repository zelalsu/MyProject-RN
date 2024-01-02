import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// NAVIGATION
export type RootStackParams = {
  SplashScreen: undefined;
  LoginScreen: undefined;

  DrawerNavigator: NavigatorScreenParams<DrawerStackParams>;
  TabNavigator: NavigatorScreenParams<TabStackParams>;
};

export type TabStackParams = {
  MainNavigator: NavigatorScreenParams<MainStackParams>;
  ProductScreen: undefined;
  MainScreen: undefined;
};

export type MainStackParams = {
  ProductSubCategoryScreen?: {id: string; title: string};
  MainScreen: undefined;
};

export type DrawerStackParams = {
  MainScreen: undefined;
};

// PROPS
export type RootStackScreenProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

export type TabStackScreenProps<
  T extends keyof RootStackParams,
  E extends keyof TabStackParams,
> = CompositeScreenProps<
  NativeStackScreenProps<TabStackParams, E>,
  NativeStackScreenProps<RootStackParams, T>
>;
export type DrawerStackScreenProps<
  T extends keyof RootStackParams,
  E extends keyof DrawerStackParams,
> = CompositeScreenProps<
  NativeStackScreenProps<DrawerStackParams, E>,
  NativeStackScreenProps<RootStackParams, T>
>;

export type MainRootStackScreenProps<
  T extends keyof TabStackParams,
  E extends keyof MainStackParams,
> = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, E>,
  CompositeScreenProps<
    NativeStackScreenProps<TabStackParams, T>,
    NativeStackScreenProps<RootStackParams, 'TabNavigator'>
  >
>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}

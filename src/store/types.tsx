// ROUTE
export type RouteSliceParams = {
  path: 'RootNavigator' | 'AuthNavigator';
};

// THEME
export type ThemeSliceParams = {
  mode: 'light' | 'dark' | 'system';
};
// USER
export type UserInfoParams = {
  firstName: string;
  id: string;
  language: null;
  lastName: string;
  refreshToken: string;
  status: number;
  tokenString: string;
  username: string;
};
export type UserSessionInfoParams = {
  tokenString: string;
};
export type UserSliceParams = {
  user: UserInfoParams;
};

export type LangugeSliceParams = {
  id: string;
  code: string;
};

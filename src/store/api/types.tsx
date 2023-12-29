export type LoginApiResponseParams = {
  user: {
    firstName: string;
    id: string;
    language: null;
    lastName: string;
    refreshToken: string;
    status: number;
    tokenString: string;
    username: string;
  };
};

export type LoginApiParams = {
  username: string;
  password: string;
};

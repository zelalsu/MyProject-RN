export type LoginApiResponseParams = {
  firstName: string;
  id: string;
  language: null;
  lastName: string;
  refreshToken: string;
  status: number;
  tokenString: string;
  username: string;
};

export type LoginApiParams = {
  username: string;
  password: string;
};

export type ShopApiParams = {
  userName_0: string;
};

export type ShopApiResponseParams = {
  getUserInfo: {
    magazaGuid: null;
  };
  getnowOnlyDate: {
    getnowOnlyDate: string;
  };
  sbSubeList: [
    {
      aktiflik: boolean;
      id: string;
      siraNo: number;
      subeAdi: string;
    },
  ];
};

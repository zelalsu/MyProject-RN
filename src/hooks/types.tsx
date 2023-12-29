export type UseApiModalParams = {
  title: string;
  desc: string;
  svg?: JSX.Element;
  isVisible?: boolean;
  type: 'FETCH_ERROR' | 'ERROR' | 'SUCCESS' | '';
  offline?: boolean;
};

export type UseApiParams = {
  successHandler?: ((v: any) => typeof v) | undefined;
  errorHandler?: ((v: any) => typeof v) | undefined;
};

type UseApiResponseHandlerParams = {
  error?: any;
  isError: boolean;
  isSuccess: boolean;
  data?: any;
};

export type UseApiResponseReturnParams = {
  modalView: ({
    bottom,
    modalPosition,
    onHideSuccess,
    onHideError,
  }: {
    bottom?: number;
    modalPosition?: 'center' | 'top' | 'bottom';
    onHideSuccess?: () => void;
    onHideError?: () => void;
  }) => JSX.Element;
  apiResponseHandler: ({
    res,
  }: // customSuccess,
  // offline,
  // extraData,
  ApiResponseHandler) => void;
  modalOpenHandler: (v: UseApiModalParams) => void;
};

export type ApiResponseHandler = {
  res: UseApiResponseHandlerParams;
  // customSuccess?: {
  //   desc: string;
  //   svg?: JSX.Element;
  // };
  // offline?: boolean;
  // extraData?: any;
};

import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {ApiResponseHandler, UseApiParams} from './types';

const useApiResponse = ({successHandler, errorHandler}: UseApiParams) => {
  const [modalIsVisible, setModalIsVisible] = useState({
    status: '',
    message: '',
    isVisible: false,
  });

  const apiResponseHandler = ({res}: ApiResponseHandler) => {
    console.log(res);
    if (res.isError) {
      if (res.error?.status === 'FETCH_ERROR') {
        console.log('internetin kapalı');
        setModalIsVisible({
          status: 'error',
          message: 'FETCH_ERROR',
          isVisible: true,
        });
      }
      if (res.error?.status === 'TIMEOUT_ERROR') {
        console.log('zaman aşımına uğradı');
      }
      if (res.error?.status === 'PARSING_ERROR') {
        console.log('veri sıkıntısı');
      }
      if (
        res.error?.data &&
        res.error.status !== 'FETCH_ERROR' &&
        res.error.status !== 'TIMEOUT_ERROR' &&
        res.error.status !== 'PARSING_ERROR'
      ) {
        setModalIsVisible({
          status: 'error',
          message: res.error.data.message,
          isVisible: true,
        });
      }
      errorHandler?.(res.error);
    }
    if (res.isSuccess) {
      setModalIsVisible({
        status: 'success',
        message: 'başarılı',
        isVisible: true,
      });
      successHandler?.(res.data);
    }
  };
  console.log(modalIsVisible.status);

  const modalView = () => {
    return (
      <>
        {modalIsVisible.isVisible && modalIsVisible.status === 'success' && (
          <Text style={styles.text}>Başarılı</Text>
        )}
        {modalIsVisible.isVisible && modalIsVisible.status === 'error' && (
          <Text style={styles.text}>{modalIsVisible.message}</Text>
        )}
      </>
    );
  };

  return {modalView, apiResponseHandler};
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default useApiResponse;

import React, {useState} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import {ApiResponseHandler, UseApiParams} from './types';

const useApiResponse = ({successHandler, errorHandler}: UseApiParams) => {
  const [modalIsVisible, setModalIsVisible] = useState({
    status: '',
    message: '',
    isVisible: false,
  });

  const apiResponseHandler = ({res}: ApiResponseHandler) => {
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

  const modalView = () => {
    return (
      <View style={styles.modalContainer}>
        {modalIsVisible.status === 'success' && (
          <>
            <ActivityIndicator />
            <View style={styles.errorText}>
              <Text style={styles.closeButtonText}>
                {modalIsVisible.message}
              </Text>
            </View>
          </>
        )}
        {modalIsVisible.status === 'error' && (
          <View style={styles.errorText}>
            <Text style={styles.closeButtonText}>{modalIsVisible.message}</Text>
          </View>
        )}
      </View>
    );
  };

  return {modalView, apiResponseHandler};
};
const styles = StyleSheet.create({
  modalContainer: {marginTop: 5},
  successText: {
    padding: 10,
    borderRadius: 5,
    color: 'green',
  },
  errorText: {
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },

  closeButton: {
    borderRadius: 5,
    marginRight: 10,
  },

  closeButtonText: {
    padding: 5,
    borderRadius: 30,
    color: 'red',
  },
});

export default useApiResponse;

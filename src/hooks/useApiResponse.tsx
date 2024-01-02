import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ApiResponseHandler, UseApiParams} from './types';
import {window} from '@src/constant/dimension';

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
        console.log('burda mısın');

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
  const closeModal = () => {
    setModalIsVisible({
      status: '',
      message: '',
      isVisible: false,
    });
  };

  const modalView = () => {
    return (
      <View style={styles.modalContainer}>
        {modalIsVisible.status === 'success' && <ActivityIndicator />}
        {modalIsVisible.status === 'error' && (
          <View style={styles.errorText}>
            <Text style={styles.closeButtonText}>{modalIsVisible.message}</Text>
            {/* <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity> */}
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
    flexDirection: 'row', // Satır boyunca düzenleme
  },

  closeButton: {
    borderRadius: 5,
    marginRight: 10, // Sağdan boşluk ekleyerek X'i ayır
  },

  closeButtonText: {
    padding: 5,
    borderRadius: 30,
    color: 'red',
  },
});

export default useApiResponse;

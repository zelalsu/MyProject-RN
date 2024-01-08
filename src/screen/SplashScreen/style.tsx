import {window} from '@src/constant/dimension';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(192, 192, 192, 0.3)',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 77,
  },
  descContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 38,
  },
  descMain: {
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'purple',
    width: window.width - 34,
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 16,
  },
  button: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 0.4,
  },
  desc1: {
    color: 'red',
    fontSize: 20,

    letterSpacing: 0.4,
  },
  desc2: {
    color: 'gray',
    fontSize: 20,

    letterSpacing: 0.4,
  },
});
export default style;

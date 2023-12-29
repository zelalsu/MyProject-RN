import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(192, 192, 192, 0.3)',
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 20,

    backgroundColor: 'white',

    borderRadius: 30,
  },
  inputText: {
    marginHorizontal: 16,
    marginVertical: 50,
  },
});

export default style;

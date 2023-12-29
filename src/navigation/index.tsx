import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams} from './types';
import LoginScreen from '../screen/LoginScreen/LoginScreen';
import MainScreen from '../screen/MainScreen/MainScreen';

const Stack = createStackNavigator<RootStackParams>();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}
export default Navigation;

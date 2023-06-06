import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../screens/quiz';
import Home from '../screens/home';
import Result from '../screens/result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}
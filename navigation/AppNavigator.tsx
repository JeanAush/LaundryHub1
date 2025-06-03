import React from 'react';
import WelcomeScreen from '../screens/common/welcomeScreen'; 
import HomeScreen from '../screens/main/homeScreen';
//import loginScreen from '../screens/auth/LoginScreen';
//import registerScreen from '../screens/auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/*<Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={registerScreen} />
      {/* Add more screens here */}
       <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

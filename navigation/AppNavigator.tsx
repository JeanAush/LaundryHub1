import React from 'react';
import WelcomeScreen from '../screens/common/welcomeScreen'; // make sure case matches
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
}

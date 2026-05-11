

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/Splash';
import TabNavigator from '../TabNavigator';
import TaskDetailScreen from '../../screens/TaskDetail';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
    name="Splash"
    component={SplashScreen}/>

      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

   
     
    </Stack.Navigator>
  );
};

export default StackNavigator;
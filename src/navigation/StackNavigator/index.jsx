

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from '../TabNavigator';
import AddTaskScreen from '../../screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
      />

    </Stack.Navigator>
  );
};

export default StackNavigator;
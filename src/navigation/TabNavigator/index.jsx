import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Tasks"
        component={HomeScreen}
      />

    </Tab.Navigator>
  );
};

export default TabNavigator;
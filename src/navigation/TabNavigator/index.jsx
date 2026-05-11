import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/Home';
import AddTaskScreen from '../../screens/AddTaskScreen';
import TaskDetailScreen from '../../screens/TaskDetail';
import {  Text ,TouchableOpacity} from 'react-native'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {

          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          }
          else if (route.name === 'Add-Task') {
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          }
          else if (route.name === 'Task-Detail') {
            iconName = focused
              ? 'document-text'
              : 'document-text-outline';
          }

          return (
            <Icon
              name={iconName}
              size={24}
              color={color}
            />
          );
        },

        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },

        headerTitleAlign: 'center',
      })}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Add-Task"
        component={AddTaskScreen}
        options={({ navigation }) => ({   
    headerLeft: () => (
      <TouchableOpacity  
        onPress={() => navigation.goBack()}  
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}  
      >  
        <Icon name="arrow-back" size={24} color="black" />  
        <Text style={{ marginLeft: 8, fontSize: 16 }}></Text>  
      </TouchableOpacity>  
    ),
  })}
      />
 
      <Tab.Screen
        name="Task-Detail"
        component={TaskDetailScreen}
        options={({ navigation }) => ({   
    headerLeft: () => (
      <TouchableOpacity  
        onPress={() => navigation.navigate('Add-Task')}  
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}  
      >  
        <Icon name="arrow-back" size={24} color="black" />  
        <Text style={{ marginLeft: 8, fontSize: 16 }}></Text>  
      </TouchableOpacity>  
    ),
  })}
      />

    </Tab.Navigator>
  );
};

export default TabNavigator;
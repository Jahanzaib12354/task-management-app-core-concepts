
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

  const addTask = () => {
    if (title === '') {
      Alert.alert('Error', 'Title is required');
      return;
    }
    
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: true,
    };

    console.log("New Task:", title);

    setTitle('');
      setDescription('');
    Alert.alert('Success', 'Task Added (local only)');
  };

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Task Title "
        value={title}
        onChangeText={setTitle}
      />
       <InputField
        placeholder="Description (optional)"
        value={description}
        onChangeText={setDescription}
      />


      <CustomButton text="Save Task" onPress={addTask} />
    </View>
  );
};

export default AddTaskScreen;
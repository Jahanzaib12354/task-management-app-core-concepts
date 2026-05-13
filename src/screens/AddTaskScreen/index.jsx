
import React, { useState } from 'react';
import { View,Text, Alert, ToastAndroid } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { getTasks, saveTasks } from '../../services/storageService';
import styles from './styles';

const AddTaskScreen = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const addTask = async () => {

    if (!title.trim()) {
      Alert.alert('Error', 'Title is required');
      return;
    }

    try {

      const tasks = await getTasks();

      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };

      tasks.push(newTask);

      await saveTasks(tasks);

      ToastAndroid.show(
        'Task Saved Successfully',
        ToastAndroid.SHORT
      );

      setTitle('');
      setDescription('');

      navigation.navigate('Home');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
    <InputField
  label="Task-Title"
  required
  customStyle={styles.input}
  placeholder="Task-Title"
  value={title}
  onChangeText={setTitle}
/>

      <InputField 
      label="Description"
      customStyle={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <CustomButton customStyle={styles.buttonContainer}
        text="Save Task"
        onPress={addTask}
      />

    </View>
  );
};

export default AddTaskScreen;
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import styles from './styles';

const AddTaskScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');

  const addTask = () => {
    if (title === '') {
      Alert.alert('Error', 'Title is required');
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      completed: true,
    };

    route.params?.onAddTask(newTask);

    setTitle('');
  

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title *"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Save Task" onPress={addTask} />
    </View>
  );
};

export default AddTaskScreen;
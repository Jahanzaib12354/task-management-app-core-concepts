
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { getTasks, saveTasks } from '../../services/storageService';
import TaskStatus from '../../components/TaskStatus'
import styles from './styles';

const TaskDetailScreen = ({ route, navigation }) => {

  const task = route.params?.task;

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setCompleted(task.completed);
    }
  }, [task]);

  const markCompleted = async () => {

    if (completed) {
      Alert.alert('Already Completed');
      return;
    }

    try {

      const tasks = await getTasks();

      const updatedTasks = tasks.map((item) => {

        if (String(item.id) === String(task.id)) {
          return {
            ...item,
            completed: true,
          };
        }

        return item;
      });

      await saveTasks(updatedTasks);

      setCompleted(true);

      Alert.alert('Success', 'Task Completed');

      navigation.goBack();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {task?.title}
      </Text>

      <Text style={styles.label}>Status</Text>

      {/* <Text
        style={
          completed
            ? styles.completed
            : styles.pending
        }
      >
        {completed ? 'Completed' : 'Pending'}
      </Text> */}
     <TaskStatus completed={completed} />

      <TouchableOpacity
        style={styles.button}
        onPress={markCompleted}
      >
        <Text style={styles.buttonText}>
          Mark as Completed
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default TaskDetailScreen;



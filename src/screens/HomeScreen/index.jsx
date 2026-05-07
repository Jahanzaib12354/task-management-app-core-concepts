
import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import TaskItem from '../../components/TaskItem';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'React', completed: false },
    { id: 2, title: 'Assignment', completed: true },
  ]);

  const addTaskHandler = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <View style={styles.container}>

      <Button
        title="Add Task"
        onPress={() =>
          navigation.navigate('AddTask', {
            onAddTask: addTaskHandler,
          })
        }
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />

    </View>
  );
};

export default HomeScreen;
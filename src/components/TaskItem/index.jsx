
import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles'
const TaskItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={task.completed ? styles.done : styles.pending}>
          {task?.completed ? 'Done' : 'Pending'}
        </Text>
      </View>
    </View>
  );
};

export default TaskItem;

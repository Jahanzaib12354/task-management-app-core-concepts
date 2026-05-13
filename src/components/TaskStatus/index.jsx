import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const TaskStatus = ({ completed }) => {
  return (
    <Text
      style={completed ? styles.completed : styles.pending}
    >
      {completed ? 'Completed' : 'Pending'}
    </Text>
  );
};

export default TaskStatus;
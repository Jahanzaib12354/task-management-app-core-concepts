
import React from 'react';
import {View,Text,TouchableOpacity,} from 'react-native';
import styles from './styles';
const TaskItem = ({
  task,
  onPress,
}) => {

  return (

    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
    >

      <View style={styles.container}>
        <Text style={styles.title}>
          {task.title}
        </Text>
        <Text
          style={
            task.completed
              ? styles.completed
              : styles.pending
          }
        >
          {
            task.completed
              ? 'Completed'
              : 'Pending'
          }

        </Text>

      </View>

    </TouchableOpacity>
  );
};

export default TaskItem;
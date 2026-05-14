
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import TaskStatus from '../TaskStatus';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskItem = ({
  task,
  onPress,
  onDelete,
}) => {

  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={0.8}
        onPress={onPress}
      >

        <Text style={styles.title}>
          {task.title}
        </Text>

        <TaskStatus completed={task.completed} />

      </TouchableOpacity>

      <TouchableOpacity
        onPress={onDelete}
        style={styles.deleteBtn}
      >

        <Icon
          name="trash-outline"
          size={24}
          color="red"
        />

      </TouchableOpacity>

    </View>
  );
};

export default TaskItem;
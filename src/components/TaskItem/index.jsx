
// import React from 'react';
// import {View,Text,TouchableOpacity,} from 'react-native';
// import styles from './styles';
// import TaskStatus from '../TaskStatus';
// const TaskItem = ({
//   task,
//   onPress,
// }) => {

//   return (

//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={onPress}
//     >

//       <View style={styles.container}>
//         <Text style={styles.title}>
//           {task.title}
//         </Text>
       
//          <TaskStatus completed={task.completed} />

//       </View>

//     </TouchableOpacity>
//   );
// };

// export default TaskItem;


import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import TaskStatus from '../TaskStatus';

const TaskItem = ({
  task,
  onPress,
  onDelete, // ✅ ADDED (DELETE PROP)
}) => {

  return (

    <View style={styles.container}>

      {/* TASK CLICK AREA */}
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
        <Text style={styles.deleteText}>
          Delete
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default TaskItem;
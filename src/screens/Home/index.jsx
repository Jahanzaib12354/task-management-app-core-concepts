
import React, {useState,useCallback,} from 'react';
import {View,FlatList,Text,ActivityIndicator,} from 'react-native';
import {useFocusEffect,} from '@react-navigation/native';
import TaskItem from '../../components/TaskItem';
import { getTasks } from '../../services/storageService';
import styles from './styles';

const HomeScreen = ({ navigation }) => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {

    try {

      setLoading(true);

      const data = await getTasks();

      setTasks(data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  const openTaskDetail = (task) => {
    navigation.navigate('Task-Detail', { task });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#eb6a25" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => openTaskDetail(item)}
          />
        )}

        ListEmptyComponent={() => (
          <View style={styles.center}>
            <Text style={styles.emptyText}>
              No tasks available
            </Text>
          </View>
        )}
      />

    </View>
  );
};

export default HomeScreen;
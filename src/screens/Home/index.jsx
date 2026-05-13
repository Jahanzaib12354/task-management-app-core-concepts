
import React, { useState, useCallback } from 'react';
import {View,FlatList,Text,ActivityIndicator,SafeAreaView,} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import TaskItem from '../../components/TaskItem';
import InputField from '../../components/InputField';
import { getTasks, deleteTask } from '../../services/storageService';
import styles from './styles';

const HomeScreen = ({ navigation }) => {

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(data);
      setFilteredTasks(data);

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

  
  const handleSearch = (text) => {

    setSearchText(text);

    if (text.trim() === '') {
      setFilteredTasks(tasks);
    } else {

      const filtered = tasks.filter((item) => {

        const status = item.completed ? 'completed' : 'pending';

         console.log('Status:', status);

        return (
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          status.toLowerCase().includes(text.toLowerCase())
        );
      });

console.log('Filtered Tasks:', filtered);

      setFilteredTasks(filtered);
    }
  };


  const openTaskDetail = (task) => {
    navigation.navigate('Task-Detail', { task });
  };


  const handleDelete = async (id) => {
    try {
      const updatedTasks = await deleteTask(id);
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.headerTitle}>My Tasks</Text>

      <InputField
        label="Search"
        placeholder="Search tasks or status..."
        value={searchText}
        onChangeText={handleSearch}
        customStyle={styles.searchInput}
      />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}

        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => openTaskDetail(item)}
            onDelete={() => handleDelete(item.id)}
          />
        )}

        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No tasks found
            </Text>
          </View>
        )}
      />

    </SafeAreaView>
  );
};

export default HomeScreen;

import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'TASKS';

export const getTasks = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const tasks = await getTasks();

    const updatedTasks = tasks.filter(
      (item) => item.id !== taskId
    );

    await saveTasks(updatedTasks);

    return updatedTasks;

  } catch (error) {
    console.log(error);
    return [];
  }
};

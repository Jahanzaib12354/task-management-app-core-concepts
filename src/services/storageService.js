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
    await AsyncStorage.setItem(
      KEY,
      JSON.stringify(tasks)
    );
  } catch (error) {
    console.log(error);
  }
};
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Logger } from '../utils';

const get = async (key: string) => {
  let val = null;
  try {
    const stringVal = await AsyncStorage.getItem(key);
    if (stringVal) {
      val = JSON.parse(stringVal);
      return val;
    }
  } catch (error) {
    Logger.error(error);
  }
  return val;
};

const set = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  get,
  set,
};

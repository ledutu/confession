import AsyncStorage from '@react-native-async-storage/async-storage';
import queryString from 'query-string';
import SimpleToast from 'react-native-simple-toast';

export const queryStringBody = body => {
  return queryString.stringify(body);
};

export const Toast = string => {
  SimpleToast.show(string);
};

export const handleError = error => {
  if (error.data.status === 401) {
    Toast(error.data.message);
  }
};

export const storage = {
  setItem: async (key, data) => {
    data = typeof data === 'string' ? data : JSON.stringify(data);
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.error(e);
    }
  },

  getItem: async key => {
    try {
      let value = await AsyncStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    } catch (e) {
      return null;
    }
  },

  removeItem: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  },
};

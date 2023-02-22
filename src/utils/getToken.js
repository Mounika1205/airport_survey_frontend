import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  let result = ""
  try {
    const token = await AsyncStorage.getItem('TOKEN');
    // console.log("Token-----------_>", token);
   token !== null ? result = token : result = ""
  } catch (e) {
    throw e;
  }
  return result
};

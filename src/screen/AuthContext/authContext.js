import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import endPoints from '../../apis/index';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);


  
  const login = async user => {
    console.log(user);
    let config = {
      method: 'post',
      url: endPoints.auth.login,
      // url:'http://10.0.2.2:5005/api/v1/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },

      data:user,
    };
    console.log('Config', config);

    try {
      const response = await axios(config);
      console.log('Response-----------__>', response);
      console.log('Response-----------__>', response.data.token);
      setToken(response.data.token);
      await AsyncStorage.setItem('token', response.data.token);

      return response;
    } catch (e) {
      console.log(e, 'iam error');
      throw e;
    }
  };

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      let token = await AsyncStorage.getItem('token');
      setToken(token);
      setLoading(false);
    } catch {
      console.log('Is logged in  error');
      setLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{token, login, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

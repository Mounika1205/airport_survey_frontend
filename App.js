import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import {AuthProvider} from './src/screen/AuthContext/authContext'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootNavigation from './src/screen/RootNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

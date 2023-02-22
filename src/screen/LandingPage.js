import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{display: 'flex', alignItems: 'center', marginTop: 100}}>
      <View>
        <Text style={styles.head}>Start your survey</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Airport');
        }}
        style={styles.button}>
        <Text style={styles.text}>GO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  head: {
    fontSize: 60,
    fontWeight: '700',
    color: 'darkgrey',
  },

  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA8B5B',
    borderRadius: 5,
    marginTop: 70,
    width: '80%',
    height: 42,
  },

  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '800',
  },
  textItem: {
    fontSize: 16,
    color: '#000',
  },
});

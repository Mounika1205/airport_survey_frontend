import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


import {AuthContext} from './AuthContext/authContext'

const Login = () => {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [token, setToken] = useState(null);

  const navigation = useNavigation();


 const {login} =useContext(AuthContext);

 

  const handleSubmit = async () => {    


    const data ={email,password}

    const loginDetails =
    {
      email:email,
      password:password
    }
 
     const login_details=JSON.stringify(loginDetails)
     console.log(login_details)

    try {
       const response = await login(loginDetails);
      console.log(data, 'dataa');
      console.log('Response---->', response);
       Alert.alert('Logged in Successfully')

    } catch (e) {
      console.log('error--------->', e);
      Alert.alert('InCorrect Username or Password')

      throw e;
    }
  };

 


  
  const handelCheckForm1 = text => {
    setEmail(text);
    if (text.trim() != 0) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handelCheckForm2 = text => {
    setPassword(text);
    if (text.trim() != 0) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.heading}>Signin</Text>
      <View style={{alignItems: 'center', marginTop: 35}}>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={text => handelCheckForm1(text)}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            value={email}
          />
        </View>
        {checkValidEmail ? (
          <Text style={styles.textFailed}>*Please enter the Email </Text>
        ) : (
          null
        )}
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={text => handelCheckForm2(text)}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            value={password}
          />
        </View>
        {checkValidPassword ? (
          <Text style={styles.textFailed}>*Please enter the password</Text>
        ) : (
          null
        )}

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Sign in</Text>
        </Pressable>
        <Pressable style={styles.buttonBack}>
          <Text style={styles.text}>Go Back</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: '#000',
    paddingLeft: 35,
    paddingTop: 150,
  },
  inputBox: {
    flex: 1,
    height: 45,
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    paddingHorizontal: 5,
    marginTop: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },
  input: {
    position: 'relative',
    height: '100%',
    width: '90%',
    color: '#000',
    paddingLeft: 20,
    borderRadius: 70,
    fontSize: 16,
  },

  form: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  formText: {
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 10,
    color: '#000',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA8B5B',
    borderRadius: 5,
    marginTop: 80,
    width: '80%',
    height: 42,
  },
  buttonDisable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA8B5B',
    borderRadius: 5,
    marginTop: 80,
    width: '80%',
    height: 42,
  },
  buttonBack: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 5,
    marginTop: 25,
    width: '80%',
    height: 42,
  },
  text: {
    fontSize: 15,
    color: 'white',
    // textAlign: 'center',
  },
  textFailed: {
    color: 'red',
    marginRight: 150,
  },
});

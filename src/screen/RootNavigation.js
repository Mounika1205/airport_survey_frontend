import Login from './Login';
import CountSec from './CountSec';
import React, {useContext} from 'react';
import {View, Text,ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Airport from './Airport';
import Area from './Area';
import Checkin from './Checkin';
import Transport from './Transport';
import Immigration from './Immigration';
import Emmigration from './Emmigration';
import Customs from './Customs';
import Parking from './Parking';
import Securityy from './Securityy';
import Baggage from './Baggage';
import LandingPage from './LandingPage';
import { AuthContext } from './AuthContext/authContext';



const Stack = createNativeStackNavigator();

const RootNavigation = () => {


  const {loading,token} =useContext(AuthContext)
  // console.log(token,"kkkkkkk")



  

  return (
    <>
    {
      loading ? 
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <ActivityIndicator size={'large'} />
      </View>
      :
      
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
      {token === null ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      ) : (
        <>
        <Stack.Screen name='LandingPage' component={LandingPage} />
          <Stack.Screen
            name="Airport"
            component={Airport}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Area"
            component={Area}
            options={{headerShown: false}}
          />


          <Stack.Screen
            name="CHECKIN"
            component={Checkin}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="TRANSPORT"
            component={Transport}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CountSec"
            component={CountSec}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="IMMIGRATION"
            component={Immigration}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="EMIGRATION"
            component={Emmigration}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CUSTOMS"
            component={Customs}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PARKING"
            component={Parking}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SECURITY"
            component={Securityy}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="BAGGAGE"
            component={Baggage}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
}
</>
  )

};

export default RootNavigation;

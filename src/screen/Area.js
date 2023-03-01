import { View, Text,TouchableHighlight,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'
import { AuthContext } from './AuthContext/authContext';

const Area = () => {
  const route =useRoute();


  
  
    const  terminal =route.params.terminal
    const  airportName= route.params.airportValue

    console.log(terminal,airportName,"iam params")


    
    const navigation=useNavigation();

    const Area = [
        {
          id: 1,
          name: 'CHECKIN',
          
        },
        {
          id: 2,
          name: 'SECURITY',
        
        },
        {
          id: 3,
          name: 'BAGGAGE',
    
        },
        {
            id: 4,
            name: 'TRANSPORT',
      
          },
          {
            id: 5,
            name: 'IMMIGRATION',
      
          },
          {
            id: 6,
            name: 'EMIGRATION',
      
          },
          {
            id: 7,
            name: 'CUSTOMS',
      
          },
          {
            id: 8,
            name: 'PARKING',
      
          },
        
      ];

  const selected_area =() => {
    setAreaName  }
      
  return (
    <View style={style.contain}>
    <Text style={style.title}> AREAS </Text>
   

   <View style={{
   
   }}>
   {
    Area.map(area => (
            <TouchableHighlight key={area.id}
                style={style.area_button}
                onPress={() => {
                  let areaName=area.name
                  navigation.navigate(`${area.name}`,{terminal,airportName,areaName})

                }} >
                <Text style={style.buttonText}>{area.name}</Text>
               
           
            </TouchableHighlight>
         
        ))
       
    }
   </View>
    </View>
  )
}


export default Area

const style=StyleSheet.create({
    contain :{
        flex: 1,
        backgroundColor: '#fdf4e0',
        padding: 10,
        paddingTop: Dimensions.get('window').height * 0.1,
        paddingBottom: Dimensions.get('window').height * 0.1,
        paddingLeft: Dimensions.get('window').width * 0.1,
        paddingRight: Dimensions.get('window').width * 0.1,
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: '#000',
        marginBottom:20,
        textAlign: 'center',
    },
    area_button: {
        backgroundColor: '#EA8B5B',
        marginTop: 10,
        width: Dimensions.get('window').width * 0.8,
        padding: 10,
        borderRadius: 5,
        
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
 
    },

})
import {View, Text, TouchableHighlight,StyleSheet,Dimensions} from 'react-native';
import React, {useState} from 'react';

import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';


const Airport = () => {
  const navigation = useNavigation();

  const [airportName, setAirportName] = useState('');

  const [terminal, setTerminal] = useState('');
const [airportValue,setAirportValue] =useState(null)
const[terminalValue,setTerminalValue] =useState(null)

  const [selectedDropdown, setSelectedDropdown] = useState(false);

  const Terminal_data = [
    {label: 'MOPA TERMINAL', value: '1'},
    {label: 'HYD DOMESTIC', value: '2'},
    {label: 'HYD INTERNATIONAL', value: '3'},
  ];

  const Airport_name = [
    {label: 'MOPA AIRPORT', value: '1'},
    {label: 'HYDERABAD AIRPORT', value: '2'},
  ];


  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Airport Details</Text>

      <Text style={styles.subtitle}>Airport Name</Text>
      <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Airport_name}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Airport "
          searchPlaceholder="Search..."
          value={airportName}
          onChange={item => {
            setAirportName(item.value);
          }}
          renderItem={renderItem}
        />
     
      <Text style={styles.subtitle}>Terminal</Text>
      <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Terminal_data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Terminals"
          searchPlaceholder="Search..."
          value={terminalValue}
          onChange={item => {
            setTerminalValue(item.value);
          }}
          renderItem={renderItem}
        />
     
    

      <Text style={{marginTop: 80}}>
        <View>
          <TouchableHighlight
          onPress={() => navigation.navigate('Area')}
            style={
            styles.submitButton
            }>
            <Text 
             style={styles.buttonText}>
           Next
            </Text>
          </TouchableHighlight>
        </View>
      </Text>
    </View>
  );
};

export default Airport;

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf4e0',
    padding: 20,
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
subtitle: {
  fontSize: 18,
  fontWeight: '500',
  color: '#000',
  marginTop: 20,
  marginBottom: 10,
},
  dropdown: {
    marginLeft: 5,
    width: Dimensions.get('window').width * 0.8,
    height: 50,
    backgroundColor: '#EA8B5B',
    borderRadius: 12,

    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'white',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#EA8B5B',
    width: Dimensions.get('window').width * 0.8,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '400',
  textAlign: 'center',
},
})
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {useNavigation} from '@react-navigation/core';
import {Dropdown} from 'react-native-element-dropdown';
import {storeAirportDemograph} from '../apis/apis.services';
import {getToken} from '../utils/getToken';

const Day = [
  {label: 'Monday', value: 'Monday'},
  {label: 'Tuesday', value: 'Tuesday'},
  {label: 'Wednesday', value: 'Wednesday'},
  {label: 'Thursday', value: 'Thursday'},
  {label: 'Friday', value: 'Friday'},
  {label: 'Saturday', value: 'Saturday'},
  {label: 'Sunday', value: 'Sunday'},
];
const Timeslot = [
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
  {label: '4', value: '4'},
  {label: '5', value: '5'},
  {label: '6', value: '6'},
  {label: '7', value: '7'},
];
const Airport_lounge = [
  {label: 'Domestic', value: 'Domestic'},
  {label: 'International', value: 'International'},
];

const Security = () => {
  const [date, onChangeDate] = React.useState('');
  const [day, setDay] = useState('');
  const [isDay, setIsDay] = useState(false);
  const [timeslot, setTimeslot] = useState('');
  const [isTimeslot, setIsTimeslot] = useState(false);
  const [airport_lounge, setAirport_lounge] = useState('');
  const [isAirport_lounge, setIsAirport_lounge] = useState(false);

  // const [token, setToken] = useState(null);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    let uuid = uuidv4();
    console.log(uuid);
    const data = {day, timeslot, airport_lounge, uuid};
    // login(data).then((response) =>  console.log("Response---->", response));
    const _token = await getToken();
    console.log('Data', data);

    try {
      const response = await storeAirportDemograph(_token, data);
      console.log('Response---->', response);

      if (response) {
        console.log('Response---->', response);
        navigation.navigate('Airport')
        // navigation.navigate('CountSec', {
        //   uuid,
        // });
      }
    } catch (e) {
      console.log('error--------->', e);
      throw e;
    }
  };

  // console.log("sid", day)
  console.log('nik', timeslot);
  // console.log("airport_lounge", airport_lounge)

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{display: 'flex', alignItems: 'center', marginTop: 100}}>
        <View><Text style={styles.head}>Start your survey</Text></View>
      {/* <View style={styles.option}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDate}
          value={date}
          placeholder="Date"
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.option}>
        <Dropdown
          style={[styles.inputDrop]}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={Day}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isDay ? 'Day' : ''}
          value={day}
          onFocus={() => setIsDay(true)}
          onBlur={() => setIsDay(false)}
          onChange={item => {
            setDay(item.value);
            setIsDay(false);
          }}
          renderItem={_item => renderItem(_item)}
        />
      </View>
      <View style={styles.option}>
        <Dropdown
          style={[styles.inputDrop]}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={Timeslot}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isTimeslot ? 'Slot time (Manual)' : ''}
          value={timeslot}
          onFocus={() => setIsTimeslot(true)}
          onBlur={() => setIsTimeslot(false)}
          onChange={item => {
            setTimeslot(item.value);
            setIsTimeslot(false);
          }}
          renderItem={_item => renderItem(_item)}
        />
      </View>
      <View style={styles.option}>
        <Dropdown
          style={[styles.inputDrop]}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={Airport_lounge}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isAirport_lounge ? 'DOM/Int' : ''}
          value={airport_lounge}
          onFocus={() => setIsAirport_lounge(true)}
          onBlur={() => setIsAirport_lounge(false)}
          onChange={item => {
            setAirport_lounge(item.value);
            setIsAirport_lounge(false);
          }}
          renderItem={_item => renderItem(_item)}
        />
      </View> */}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.text}>GO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  head: {
    fontSize: 60,
    fontWeight: "700",
    color: 'darkgrey'
  },
  
  input: {
    height: 50,
    width: 300,
    margin: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 10,
  },

  inputDrop: {
    height: 50,
    width: 300,
    margin: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  placeholder: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#000',
  },
  selectedTextStyle: {
    color: '#000',
    paddingLeft: 10,
    fontWeight: '500',
  },
  iconStyle: {
    width: 20,
    height: 30,
    color: '#000',
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
    fontSize: 16,
    color: 'white',
    fontWeight: "800"
  },
  textItem: {
    fontSize: 16,
    color: '#000',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Security;

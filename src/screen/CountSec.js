import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import PlayIcon from 'react-native-vector-icons/AntDesign';
import StopIcon from 'react-native-vector-icons/Ionicons';
import ResetIcon from 'react-native-vector-icons/AntDesign';

const CountSec = () => {
  const navigation = useNavigation();

  const [aiportValue, setAirportValue] = useState(null);
  const [airportName, setAirportName] = useState('');

  const [counter, SetCounter] = useState(null);

  const [mannedValue, setMannedValue] = useState(null);

  const [classValue, setClassValue] = useState(null);
  const [className, setClassName] = useState('');

  const [terminal, setTerminal] = useState('');

  const [terminalValue, setTerminalValue] = useState(null);

  const [selectedDropdown, setSelectedDropdown] = useState(false);

  const [time, setTime] = useState({
    firstTimer: '00:00:00',
    secondTimer: '00:00:00',
    thirdTimer: '00:00:00',
    fourthTimer: '00:00:00',
    fifthTimer: '00:00:00',
  });
  const [running, setRunning] = useState({
    firstTimer: false,
    secondTimer: false,
    thirdTimer: false,
    fourthTimer: false,
    fifthTimer: false,
  });

  const [beforeStart, setBeforeStart] = useState({
    firstTimer: '00:00:00',
    secondTimer: '00:00:00',
    thirdTimer: '00:00:00',
    fourthTimer: '00:00:00',
    fifthTimer: '00:00:00',
  });

  const [selectedTimer, setSelectedTimer] = useState('');

  const Counters = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
  ];

  const Class = [
    {label: 'Economy', value: '1'},
    {label: 'Business', value: '2'},
  ];
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  useEffect(() => {
    let interval;

    if (running[selectedTimer]) {
      interval = setInterval(() => {
        let date = new Date();

        const presentTime = date.toLocaleTimeString();
        setTime(prevState => ({
          ...time,
          [selectedTimer]: presentTime,
        }));
      }, 10);
      console.log(time, 'gjadg');
    } else if (!running[selectedTimer]) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running.firstTimer, running.secondTimer,running.thirdTimer,running.fourthTimer,running.fifthTimer]);
  console.log(time);

  return (
    <View style={styles.contain}>
      <Text style={styles.title}> CHECK-IN</Text>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Dropdown
            style={{
              ...styles.dropdown,
            }}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Counters}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Airlines"
            searchPlaceholder="Search..."
            value={aiportValue}
            onChange={item => {
              setAirportValue(item.value);
              setAirportName(item.label);
            }}
            renderItem={renderItem}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Counters}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Counters"
            searchPlaceholder="Search..."
            value={counter}
            onChange={item => {
              SetCounter(item.value);
            }}
            renderItem={renderItem}
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Counters}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Manned"
            searchPlaceholder="Search..."
            value={mannedValue}
            onChange={item => {
              setMannedValue(item.value);
            }}
            renderItem={renderItem}
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Class}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Class"
            searchPlaceholder="Search..."
            value={classValue}
            onChange={item => {
              setClassValue(item.value);
              setClassName(item.label);
            }}
            renderItem={renderItem}
          />
        </ScrollView>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.area_button}
          onPress={() => {
            setAirportValue(null);
            setClassValue(null);
            setMannedValue(null);
            SetCounter(null);
          }}>
          <Text style={styles.buttonText}>Reset Dropdown</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.subtitle}>TIMERS:</Text>
      </View>

      <TouchableOpacity>
        
      </TouchableOpacity>



     
    </View>
  );
};

export default CountSec;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#fdf4e0',
    padding: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  dropdown: {
    marginLeft: 5,
    width: Dimensions.get('window').width * 0.3,
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

  watch: {
    fontSize: 20,
    fontWeight: '800',
    color: '#696969',
  },
  section: {
    display: 'flex',
    marginTop: 20,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timer: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.5,
    justifyContent: 'space-around',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  area_button: {
    backgroundColor: '#EA8B5B',
    marginTop: 20,
    width: Dimensions.get('window').width * 0.8,
    padding: 10,
    borderRadius: 5,

    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#EA8B5B',
    marginTop: 40,
    width: Dimensions.get('window').width * 0.7,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    verticalAlign: 'center',
  },
  submitTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    alignItems: 'center',
  },
  BackButton: {
    backgroundColor: '#000',
    marginTop: 10,
    width: Dimensions.get('window').width * 0.7,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    verticalAlign: 'center',
  },
});

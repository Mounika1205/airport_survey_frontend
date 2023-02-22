import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ResetIcon from 'react-native-vector-icons/AntDesign';
import PlayIcon from 'react-native-vector-icons/AntDesign';
import StopIcon from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import Area from './Area'

const Immigration = () => {
  const navigation = useNavigation();
  
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

  const [counter, SetCounter] = useState(null);

  const [mannedValue, setMannedValue] = useState(null);

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
        const presentTime = new Date().toLocaleTimeString();
        console.log(presentTime, 'iam present time');
        setTime({
          ...time,
          [selectedTimer]: presentTime,
        });
      }, 1000);
      console.log(time, 'gjadg');
    } else if (!running[selectedTimer]) {
      console.log('iammmmmmmmmmmmmmm');
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    running.firstTimer,
    running.secondTimer,
    running.thirdTimer,
    running.fourthTimer,
    running.fifthTimer,
  ]);
  console.log(time, 'iam time obj');

  return (
    <View style={styles.contain}>
      <Text style={styles.title}>IMMIGRATION</Text>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems:'center'
          }}>
           
           <View>
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     
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

     
     
        </ScrollView>
           </View>
        
          <View >
            <TouchableOpacity
              onPress={() => {
                setMannedValue(null);
                SetCounter(null);
              }}>
              <View style={{}}>
                <Text style={{}}>
                  <ResetIcon name="retweet" size={25} color="#000" style={{}} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      <ScrollView>
        <View>
          <View style={styles.section}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Passenger 1
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setTime({
                    ...time,
                    firstTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    firstTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    firstTimer: false,
                  });
                }}>
                <View>
                  <Text style={{}}>
                    <ResetIcon
                      name="retweet"
                      size={25}
                      color="#000"
                      style={{}}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginHorizontal: 30,
              backgroundColor: '#EA8B5B',
              marginTop: 8,
              width: Dimensions.get('window').width * 0.8,
              height: Dimensions.get('window').height * 0.08,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTimer('firstTimer');
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();
                    setBeforeStart(prevState => ({
                      ...prevState,
                      firstTimer: presentTime,
                    }));
                    setRunning(prevState => ({
                      ...prevState,
                      firstTimer: true,
                    }));
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={28}
                    color="#fff"
                    style={{marginTop: 4}}
                  />
                </TouchableOpacity>{' '}
              </Text>

              <Text style={{fontSize: 20, color: '#fff', marginTop: 5}}>
                {' '}
                {beforeStart.firstTimer}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{}}>
                <TouchableOpacity
                  onPress={() => {
                    setRunning({
                      ...running,
                      firstTimer: false,
                    });
                  }}>
                  <StopIcon
                    name="stop-circle-outline"
                    size={32}
                    color="#ffff"
                    style={{}}
                  />
                </TouchableOpacity>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 5, color: '#fff'}}>
                {' '}
                {time.firstTimer}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.section}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Passenger 2
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setTime({
                    ...time,
                    secondTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    secondTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    secondTimer: false,
                  });
                }}>
                <View>
                  <Text style={{}}>
                    <ResetIcon
                      name="retweet"
                      size={25}
                      color="#000"
                      style={{}}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginHorizontal: 30,
              backgroundColor: '#EA8B5B',
              marginTop: 8,
              width: Dimensions.get('window').width * 0.8,
              height: Dimensions.get('window').height * 0.08,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTimer('secondTimer');
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();
                    setBeforeStart(prevState => ({
                      ...prevState,
                      secondTimer: presentTime,
                    }));
                    setRunning(prevState => ({
                      ...prevState,
                      secondTimer: true,
                    }));
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={28}
                    color="#fff"
                    style={{marginTop: 4}}
                  />
                </TouchableOpacity>{' '}
              </Text>

              <Text style={{fontSize: 20, color: '#fff', marginTop: 5}}>
                {' '}
                {beforeStart.secondTimer}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{}}>
                <TouchableOpacity
                  onPress={() => {
                    setRunning({
                      ...running,
                      secondTimer: false,
                    });
                  }}>
                  <StopIcon
                    name="stop-circle-outline"
                    size={32}
                    color="#ffff"
                    style={{}}
                  />
                </TouchableOpacity>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 5, color: '#fff'}}>
                {' '}
                {time.secondTimer}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.section}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Passenger 3
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setTime({
                    ...time,
                    thirdTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    thirdTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    thirdTimer: false,
                  });
                }}>
                <View>
                  <Text style={{}}>
                    <ResetIcon
                      name="retweet"
                      size={25}
                      color="#000"
                      style={{}}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginHorizontal: 30,
              backgroundColor: '#EA8B5B',
              marginTop: 8,
              width: Dimensions.get('window').width * 0.8,
              height: Dimensions.get('window').height * 0.08,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTimer('thirdTimer');
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();
                    setBeforeStart(prevState => ({
                      ...prevState,
                      thirdTimer: presentTime,
                    }));
                    setRunning(prevState => ({
                      ...prevState,
                      thirdTimer: true,
                    }));
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={28}
                    color="#fff"
                    style={{marginTop: 4}}
                  />
                </TouchableOpacity>{' '}
              </Text>

              <Text style={{fontSize: 20, color: '#fff', marginTop: 5}}>
                {' '}
                {beforeStart.thirdTimer}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{}}>
                <TouchableOpacity
                  onPress={() => {
                    setRunning({
                      ...running,
                      thirdTimer: false,
                    });
                  }}>
                  <StopIcon
                    name="stop-circle-outline"
                    size={32}
                    color="#ffff"
                    style={{}}
                  />
                </TouchableOpacity>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 5, color: '#fff'}}>
                {' '}
                {time.thirdTimer}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.section}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Passenger 4
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setTime({
                    ...time,
                    fourthTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    fourthTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    fourthTimer: false,
                  });
                }}>
                <View>
                  <Text style={{}}>
                    <ResetIcon
                      name="retweet"
                      size={25}
                      color="#000"
                      style={{}}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginHorizontal: 30,
              backgroundColor: '#EA8B5B',
              marginTop: 8,
              width: Dimensions.get('window').width * 0.8,
              height: Dimensions.get('window').height * 0.08,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTimer('fourthTimer');
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();
                    setBeforeStart(prevState => ({
                      ...prevState,
                      fourthTimer: presentTime,
                    }));
                    setRunning(prevState => ({
                      ...prevState,
                      fourthTimer: true,
                    }));
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={28}
                    color="#fff"
                    style={{marginTop: 4}}
                  />
                </TouchableOpacity>{' '}
              </Text>

              <Text style={{fontSize: 20, color: '#fff', marginTop: 5}}>
                {' '}
                {beforeStart.fourthTimer}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{}}>
                <TouchableOpacity
                  onPress={() => {
                    setRunning({
                      ...running,
                      fourthTimer: false,
                    });
                  }}>
                  <StopIcon
                    name="stop-circle-outline"
                    size={32}
                    color="#ffff"
                    style={{}}
                  />
                </TouchableOpacity>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 5, color: '#fff'}}>
                {' '}
                {time.fourthTimer}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.section}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Passenger 5
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setTime({
                    ...time,
                    fifthTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    fifthTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    fifthTimer: false,
                  });
                }}>
                <View>
                  <Text style={{}}>
                    <ResetIcon
                      name="retweet"
                      size={25}
                      color="#000"
                      style={{}}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginHorizontal: 30,
              backgroundColor: '#EA8B5B',
              marginTop: 8,
              width: Dimensions.get('window').width * 0.8,
              height: Dimensions.get('window').height * 0.08,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTimer('fifthTimer');
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();
                    setBeforeStart(prevState => ({
                      ...prevState,
                      fifthTimer: presentTime,
                    }));
                    setRunning(prevState => ({
                      ...prevState,
                      fifthTimer: true,
                    }));
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={28}
                    color="#fff"
                    style={{marginTop: 4}}
                  />
                </TouchableOpacity>{' '}
              </Text>

              <Text style={{fontSize: 20, color: '#fff', marginTop: 5}}>
                {' '}
                {beforeStart.fifthTimer}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{}}>
                <TouchableOpacity
                  onPress={() => {
                    setRunning({
                      ...running,
                      fifthTimer: false,
                    });
                  }}>
                  <StopIcon
                    name="stop-circle-outline"
                    size={32}
                    color="#ffff"
                    style={{}}
                  />
                </TouchableOpacity>{' '}
              </Text>
              <Text style={{fontSize: 20, marginTop: 5, color: '#fff'}}>
                {' '}
                {time.fifthTimer}
              </Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              setAirportValue(null);
              setClassValue(null);
              setMannedValue(null);
              SetCounter(null);
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              navigation.navigate('Area');
            }}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Immigration;

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
    marginTop: 20,
  },
  dropdown: {
    marginLeft: 5,  
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
  section: {
    display: 'flex',
    marginTop: 35,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
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
  buttonText: {
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

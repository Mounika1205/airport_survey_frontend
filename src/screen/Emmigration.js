import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import ResetIcon from 'react-native-vector-icons/AntDesign';
import PlayIcon from 'react-native-vector-icons/Ionicons';
import StopIcon from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AuthContext} from './AuthContext/authContext';
import {postQueueData} from '../apis/apis.services';

const Emigration = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const {token} = useContext(AuthContext);


  const airportValue = route.params.airportName;
  const terminal = route.params.terminal;

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

  const [counter, SetCounter] = useState('');

  const [mannedValue, setMannedValue] = useState('');

  const [millisec, setMilliSec] = useState({
    firstTimer: '00:00:00.0',
    secondTimer: '00:00:00.0',
    thirdTimer: '00:00:00.0',
    fourthTimer: '00:00:00.0',
    fifthTimer: '00:00:00.0',
  });

  const [validation, setValidation] = useState({
    timer: false,
    firstPassenger: false,
    secondPassenger: false,
    thirdPassenger: false,
    fourthPassenger: false,
    fifthPassenger: false,
  });


  const [resetValidation, setResetValidation] = useState({
    firstReset: false,
    secondReset: false,
    thirdReset: false,
    fourthReset: false,
    fifthReset: false,
  });

  const [timeRecorded, setTimeRecorded] = useState({
    passenger1: {
      start_time: '00:00:00',
      end_time: '00:00:00.0',
    },
    passenger2: {
      start_time: '00.00.00',
      end_time: '00:00:00.0',
    },
    passenger3: {
      start_time: '00.00.00',
      end_time: '00:00:00.0',
    },
    passenger4: {
      start_time: '00.00.00',
      end_time: '00:00:00.0',
    },
    passenger5: {
      start_time: '00.00.00',
      end_time: '00:00:00.0',
    },
  });

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
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });
        console.log(presentTime, 'iam present time');
        setTime({
          ...time,
          [selectedTimer]: presentTime,
        });
        const currentTime =
          new Date().toLocaleTimeString() + `.${new Date().getMilliseconds()}`;
        console.log(currentTime, 'iam current time');
        setMilliSec(prevState => ({
          ...millisec,
          [selectedTimer]: currentTime,
        }));
      }, 1000);
      console.log(time, 'gjadg');
    } else if (!running[selectedTimer]) {
      console.log('iammmmmmmmmmmmmmm');
      clearInterval(interval);
      setTimeRecorded(prevState => ({
        ...prevState,
        passenger1: {
          ...prevState.passenger1,
          start_time: beforeStart.firstTimer,
          end_time: millisec.firstTimer,
        },
        passenger2: {
          ...prevState.passenger2,
          start_time: beforeStart.secondTimer,
          end_time: millisec.secondTimer,
        },
        passenger3: {
          ...prevState.passenger3,
          start_time: beforeStart.thirdTimer,
          end_time: millisec.thirdTimer,
        },
        passenger4: {
          ...prevState.passenger4,
          start_time: beforeStart.fourthTimer,
          end_time: millisec.fourthTimer,
        },
        passenger5: {
          ...prevState.passenger5,
          start_time: beforeStart.fifthTimer,
          end_time: millisec.fifthTimer,
        },
      }));
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

  const handleSubmit = async () => {
    if (
      validation.fifthPassenger &&
      counter != '' &&
      mannedValue != '' &&
      !resetValidation.firstReset &&
      !resetValidation.secondReset &&
      !resetValidation.thirdReset &&
      !resetValidation.fourthReset &&
      !resetValidation.fifthReset
    ) {
      const final = {
        airport_name: route.params.airportName,
        terminal: route.params.terminal,
        area: route.params.areaName,
        meta_data: {
          Counters: counter,
          mannedCounters: mannedValue,
        },
        time_recorded: timeRecorded,
      };
      console.log(final, 'iam api object');

          const result = await postQueueData(token, final);

      if (result.status === 200) {
        Alert.alert(
          'Success',
          'Data is created Successfully',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Airport'),
            },
            console.log(terminal, airportValue),
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Error',
          'Data is not created Successfully',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('EMIGRATION'),
            },
          ],
          {cancelable: false},
        );
      }
    } else {
      Alert.alert('Please Fill or Enter all the details');
    }
  };

  const backButton = () => {
    navigation.navigate('Area', {
      airportValue,
      terminal,
    });

  };
  return (
    <View style={styles.contain}>
      <Text style={styles.title}>EMIGRATION</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
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
              placeholder="Available Counters"
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
              placeholder=" Manned Counters"
              searchPlaceholder="Search..."
              value={mannedValue}
              onChange={item => {
                setMannedValue(item.value);
              }}
              renderItem={renderItem}
            />
          </ScrollView>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              setMannedValue('');
              SetCounter('');
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
                  setResetValidation({
                    ...resetValidation,
                    firstReset: true,
                  });
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
                  setValidation({
                    ...validation,
                    firstPassenger: false,
                    timer: false,
                  });
                  setTimeRecorded(prevState => ({
                    ...prevState,
                    passenger1: {
                      ...prevState.passenger1,
                      start_time: '00:00:00',
                      end_time: '00.00.00.0',
                    },
                  }));
                  setMilliSec({
                    ...millisec,
                    firstTimer: '00:00:00.0',
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
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        counter === '' ||
                        mannedValue === '' ||
                        validation.timer
                          ? true
                          : false
                      }
                      onPress={() => {
                        setSelectedTimer('firstTimer');
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
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
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {beforeStart.firstTimer}
                  </Text>
                </View>
              </Text>
            </View>

            <View style={{}}>
              <Text>
                <View>
                  <Text>
                    <TouchableOpacity
                      disabled={running.firstTimer ? false : true}
                      onPress={() => {
                        setRunning({
                          ...running,
                          firstTimer: false,
                        });
                        setValidation({
                          ...validation,
                          firstPassenger: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          firstReset: false,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={28}
                        color="#ffff"
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {time.firstTimer}
                  </Text>
                </View>
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
                  setResetValidation({
                    ...resetValidation,
                    secondReset: true,
                  });
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
                  setValidation({
                    ...validation,
                    firstPassenger: true,
                  });
                  setTimeRecorded(prevState => ({
                    ...prevState,
                    passenger2: {
                      ...prevState.passenger2,
                      start_time: '00:00:00',
                      end_time: '00.00.00.0',
                    },
                  }));
                  setMilliSec({
                    ...millisec,
                    secondTimer: '00:00:00.0',
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
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <TouchableOpacity
                      disabled={validation.firstPassenger ? false : true}
                      onPress={() => {
                        setSelectedTimer('secondTimer');
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setBeforeStart(prevState => ({
                          ...prevState,
                          secondTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          secondTimer: true,
                        }));
                        setValidation({
                          ...validation,
                          timer: true,
                        });
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {beforeStart.secondTimer}
                  </Text>
                </View>
              </Text>
            </View>

            <View style={{}}>
              <Text>
                <View>
                  <Text>
                    <TouchableOpacity
                      disabled={running.secondTimer ? false : true}
                      onPress={() => {
                        setRunning({
                          ...running,
                          secondTimer: false,
                        });
                        setValidation({
                          ...validation,
                          secondPassenger: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          secondReset: false,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={28}
                        color="#ffff"
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {time.secondTimer}
                  </Text>
                </View>
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
                  setResetValidation({
                    ...resetValidation,
                    thirdReset: true,
                  });
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
                  setValidation({
                    ...validation,
                    secondPassenger: true,
                  });
                  setTimeRecorded(prevState => ({
                    ...prevState,
                    passenger3: {
                      ...prevState.passenger3,
                      start_time: '00:00:00',
                      end_time: '00.00.00.0',
                    },
                  }));
                  setMilliSec({
                    ...millisec,
                    thirdTimer: '00:00:00.0',
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
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <TouchableOpacity
                      disabled={validation.secondPassenger ? false : true}
                      onPress={() => {
                        setSelectedTimer('thirdTimer');
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setBeforeStart(prevState => ({
                          ...prevState,
                          thirdTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          thirdTimer: true,
                        }));
                        setValidation({
                          ...validation,
                          firstPassenger: false,
                        });
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {beforeStart.thirdTimer}
                  </Text>
                </View>
              </Text>
            </View>

            <View style={{}}>
              <Text>
                <View>
                  <Text>
                    <TouchableOpacity
                      disabled={running.thirdTimer ? false : true}
                      onPress={() => {
                        setRunning({
                          ...running,
                          thirdTimer: false,
                        });
                        setValidation({
                          ...validation,
                          thirdPassenger: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          thirdReset: false,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={28}
                        color="#ffff"
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {time.thirdTimer}
                  </Text>
                </View>
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
                  setResetValidation({
                    ...resetValidation,
                    fourthReset: true,
                  });
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
                  setValidation({
                    ...validation,
                    thirdPassenger: true,
                  });
                  setTimeRecorded(prevState => ({
                    ...prevState,
                    passenger4: {
                      ...prevState.passenger4,
                      start_time: '00:00:00',
                      end_time: '00.00.00.0',
                    },
                  }));
                  setMilliSec({
                    ...millisec,
                    fourthTimer: '00:00:00.0',
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
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <TouchableOpacity
                      disabled={validation.thirdPassenger ? false : true}
                      onPress={() => {
                        setSelectedTimer('fourthTimer');
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setBeforeStart(prevState => ({
                          ...prevState,
                          fourthTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          fourthTimer: true,
                        }));
                        setValidation({
                          ...validation,
                          secondPassenger: false,
                        });
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {beforeStart.fourthTimer}
                  </Text>
                </View>
              </Text>
            </View>

            <View style={{}}>
              <Text>
                <View>
                  <Text>
                    <TouchableOpacity
                      disabled={running.fourthTimer ? false : true}
                      onPress={() => {
                        setRunning({
                          ...running,
                          fourthTimer: false,
                        });
                        setValidation({
                          ...validation,
                          fourthPassenger: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          fourthReset: false,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={28}
                        color="#ffff"
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {time.fourthTimer}
                  </Text>
                </View>
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
                  setResetValidation({
                    ...resetValidation,
                    fifthReset: true,
                  });
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
                  setValidation({
                    ...validation,
                    fourthPassenger: true,
                    fifthPassenger: false,
                  });
                  setTimeRecorded(prevState => ({
                    ...prevState,
                    passenger5: {
                      ...prevState.passenger5,
                      start_time: '00:00:00',
                      end_time: '00.00.00.0',
                    },
                  }));
                  setMilliSec({
                    ...millisec,
                    fifthTimer: '00:00:00.0',
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
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <TouchableOpacity
                      disabled={validation.fourthPassenger ? false : true}
                      onPress={() => {
                        setSelectedTimer('fifthTimer');
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setBeforeStart(prevState => ({
                          ...prevState,
                          fifthTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          fifthTimer: true,
                        }));
                        setValidation({
                          ...validation,
                          thirdPassenger: false,
                        });
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {beforeStart.fifthTimer}
                  </Text>
                </View>
              </Text>
            </View>

            <View style={{}}>
              <Text>
                <View>
                  <Text>
                    <TouchableOpacity
                      disabled={running.fifthTimer ? false : true}
                      onPress={() => {
                        setRunning({
                          ...running,
                          fifthTimer: false,
                        });
                        setValidation({
                          ...validation,
                          fifthPassenger: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          fifthReset: false,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={28}
                        color="#ffff"
                      />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {time.fifthTimer}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              ...styles.submitButton,
              backgroundColor:
                validation.fifthPassenger &&
                counter != '' &&
                mannedValue != '' &&
                !resetValidation.firstReset &&
                !resetValidation.secondReset &&
                !resetValidation.thirdReset &&
                !resetValidation.fourthReset &&
                !resetValidation.fifthReset
                  ? '#EA8B5B'
                  : 'grey',
            }}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.BackButton} onPress={backButton}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Emigration;

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
    width: Dimensions.get('window').width * 0.4,
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
  timer_background: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginHorizontal: 30,
    backgroundColor: '#EA8B5B',
    marginTop: 8,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
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

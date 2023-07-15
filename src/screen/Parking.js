import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import ResetIcon from 'react-native-vector-icons/AntDesign';
import PlayIcon from 'react-native-vector-icons/Ionicons';
import StopIcon from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AuthContext} from './AuthContext/authContext';
import {postQueueData} from '../apis/apis.services';

const Parking = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const {token} = useContext(AuthContext);

  const airportValue = route.params.airportName;
  const terminal = route.params.terminal;

  const [type, setType] = useState('');
  const [typeName, setTypeName] = useState('');
  const Type = [
    {label: 'Arrival', value: '1'},
    {label: 'Departure', value: '2'},
  ];
  const [firstRunning, setFirstRunning] = useState(false);
  const [firstTime, setFirstTime] = useState('00:00:00');

  const [secondRunning, setSecondRunning] = useState(false);
  const [secondTime, setSecondTime] = useState('00:00:00');

  const [thirdRunning, setThirdRunning] = useState(false);
  const [thirdTime, setThirdTime] = useState('00:00:00');

  const [fourthRunning, setFourthRunning] = useState(false);
  const [fourthTime, setFourthTime] = useState('00:00:00');

  const [fifthRunning, setFifthRunning] = useState(false);
  const [fifthTime, setFifthTime] = useState('00:00:00');

  const [beforeStart, setBeforeStart] = useState({
    firstTimer: '00:00:00',
    secondTimer: '00:00:00',
    thirdTimer: '00:00:00',
    fourthTimer: '00:00:00',
    fifthTimer: '00:00:00',
  });

  const [selectedTimer, setSelectedTimer] = useState('');
  const [validationTimer, setValidationTimer] = useState(false);

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

    if (firstRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setFirstTime(presentTime);
      }, 1000);
    } else if (!firstRunning) {
      clearInterval(interval);
      setTimeRecorded(prevState => ({
        ...prevState,
        passenger1: {
          ...prevState.passenger1,
          start_time: beforeStart.firstTimer,
          end_time: firstTime,
        },
      }));
    }
    return () => {
      clearInterval(interval);
    };
  }, [firstRunning]);

  useEffect(() => {
    let interval;

    if (secondRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setSecondTime(presentTime);
      }, 1000);
    } else if (!secondRunning) {
      clearInterval(interval);
      setTimeRecorded(prevState => ({
        ...prevState,
        passenger2: {
          ...prevState.passenger2,
          start_time: beforeStart.secondTimer,
          end_time: secondTime,
        },
      }));
    }
    return () => {
      clearInterval(interval);
    };
  }, [secondRunning]);

  useEffect(() => {
    let interval;

    if (thirdRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setThirdTime(presentTime);
      }, 1000);
    } else if (!thirdRunning) {
      clearInterval(interval);
      setTimeRecorded(prevState => ({
        ...prevState,
        passenger3: {
          ...prevState.passenger3,
          start_time: beforeStart.thirdTimer,
          end_time: thirdTime,
        },
      }));
    }
    return () => {
      clearInterval(interval);
    };
  }, [thirdRunning]);

  useEffect(() => {
    let interval;

    if (fourthRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setFourthTime(presentTime);
      }, 1000);
    } else if (!fourthRunning) {
      clearInterval(interval);
      setTimeRecorded(prevState => ({
        ...prevState,
        passenger4: {
          ...prevState.passenger4,
          start_time: beforeStart.fourthTimer,
          end_time: fourthTime,
        },
      }));
    }
    return () => {
      clearInterval(interval);
    };
  }, [fourthRunning]);

  useEffect(() => {
    let interval;

    if (fifthRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setFifthTime(presentTime);
      }, 1000);
    } else if (!fifthRunning) {
      clearInterval(interval);
      setTimeRecorded(prevState => ({
        ...prevState,
        passenger5: {
          ...prevState.passenger5,
          start_time: beforeStart.fifthTimer,
          end_time: fifthTime,
        },
      }));
    }
    return () => {
      clearInterval(interval);
    };
  }, [fifthRunning]);

  const handleSubmit = async () => {
    if (type != '' && validationTimer && validation.timer) {
      const final = {
        airport_name: route.params.airportName,
        terminal: route.params.terminal,
        area: route.params.areaName,
        meta_data: {
          type: typeName,
        },
        time_recorded: timeRecorded,
      };
      console.log(final, 'iam api object');

      // Alert.alert('api suceesss');

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
              onPress: () => navigation.navigate('PARKING'),
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
      <Text style={styles.title}>PARKING</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Type}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Type"
            searchPlaceholder="Search..."
            value={type}
            onChange={item => {
              setType(item.value);
              setTypeName(item.label);
            }}
            renderItem={renderItem}
          />
        </Text>
        <View>
          <Pressable
            disabled={
              type === '' ||
              firstRunning ||
              secondRunning ||
              thirdRunning ||
              fourthRunning ||
              fifthRunning 
              // validation.fifthPassenger ||
              // validation.firstPassenger ||
              // validation.secondPassenger ||
              // validation.thirdPassenger ||
              // validation.fourthPassenger
                ? true
                : false
            }
            onPress={() => {
              setType('');
            }}>
            <View>
              <Text style={{marginTop: 10}}>
                <ResetIcon name="retweet" size={25} color="#000" style={{}} />
              </Text>
            </View>
          </Pressable>
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
              <Pressable
                onPress={() => {
                  // setResetValidation({
                  //   ...resetValidation,
                  //   firstReset: true,
                  // });

                  setBeforeStart({
                    ...beforeStart,
                    firstTimer: '00:00:00',
                  });
                  setFirstRunning(false);
                  setValidationTimer(false);
                  setFirstTime('00:00:00');
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
              </Pressable>
            </View>
          </View>
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <Pressable
                      disabled={type === '' ? true : false}
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
                        // setValidation({
                        //   ...validation,
                        //   timer: true,
                        // });
                        setFirstRunning(true);
                        setValidationTimer(true);
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </Pressable>
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
                    <Pressable
                      disabled={firstRunning ? false : true}
                      onPress={() => {
                        setValidation({
                          ...validation,
                          timer: true,
                          firstPassenger: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          firstReset: false,
                        });
                        setFirstRunning(false);
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={28}
                        color="#ffff"
                      />
                    </Pressable>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {firstTime}{' '}
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
              <Pressable
                onPress={() => {
                  // setResetValidation({
                  //   ...resetValidation,
                  //   secondReset: true,
                  // });

                  setBeforeStart({
                    ...beforeStart,
                    secondTimer: '00:00:00',
                  });
                  setSecondRunning(false);
                  setValidationTimer(false);

                  setSecondTime('00:00:00');
                  setValidation({
                    ...validation,
                    timer: false,
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
              </Pressable>
            </View>
          </View>
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <Pressable
                      disabled={type === '' ? true : false}
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

                        setSecondRunning(true);
                        setValidationTimer(true);
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </Pressable>
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
                    <Pressable
                      disabled={secondRunning ? false : true}
                      onPress={() => {
                        setValidation({
                          ...validation,
                          timer: true,
                          secondPassenger: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          secondReset: false,
                        });
                        setSecondRunning(false);
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={28}
                        color="#ffff"
                      />
                    </Pressable>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {secondTime}{' '}
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
              <Pressable
                onPress={() => {
                  // setResetValidation({
                  //   ...resetValidation,
                  //   thirdReset: true,
                  // });

                  setBeforeStart({
                    ...beforeStart,
                    thirdTimer: '00:00:00',
                  });
                  setThirdRunning(false);
                  setValidationTimer(false);

                  setThirdTime('00:00:00');
                  setValidation({
                    ...validation,
                    timer: false,
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
              </Pressable>
            </View>
          </View>
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <Pressable
                      disabled={type === '' ? true : false}
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
                        setThirdRunning(true);
                        setValidationTimer(true);
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </Pressable>
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
                    <Pressable
                      disabled={thirdRunning ? false : true}
                      onPress={() => {
                        setThirdRunning(false);
                        setValidation({
                          ...validation,
                          timer: true,
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
                    </Pressable>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>{thirdTime}</Text>
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
              <Pressable
                onPress={() => {
                  // setResetValidation({
                  //   ...resetValidation,
                  //   fourthReset: true,
                  // });

                  setBeforeStart({
                    ...beforeStart,
                    fourthTimer: '00:00:00',
                  });
                  setFourthRunning(false);
                  setValidationTimer(false);

                  setFourthTime('00:00:00');
                  setValidation({
                    ...validation,
                    timer: false,

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
              </Pressable>
            </View>
          </View>
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <Pressable
                      disabled={type === '' ? true : false}
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
                        setFourthRunning(true);
                        setValidationTimer(true);
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </Pressable>
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
                    <Pressable
                      disabled={fourthRunning ? false : true}
                      onPress={() => {
                        setFourthRunning(false);
                        setValidation({
                          ...validation,
                          timer: true,
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
                    </Pressable>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>
                    {fourthTime}
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
              <Pressable
                onPress={() => {
                  // setResetValidation({
                  //   ...resetValidation,
                  //   fifthReset: true,
                  // });

                  setBeforeStart({
                    ...beforeStart,
                    fifthTimer: '00:00:00',
                  });

                  setFifthRunning(false);
                  setValidationTimer(false);

                  setFifthTime('00:00:00');
                  setValidation({
                    ...validation,
                    timer: false,

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
              </Pressable>
            </View>
          </View>
          <View style={styles.timer_background}>
            <View style={{}}>
              <Text>
                <View style={{}}>
                  <Text>
                    <Pressable
                      disabled={type === '' ? true : false}
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

                        setFifthRunning(true);
                        setValidationTimer(true);
                      }}>
                      <PlayIcon
                        name="play-circle-outline"
                        size={28}
                        color="#fff"
                        style={{alignItems: 'center'}}
                      />
                    </Pressable>
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
                    <Pressable
                      disabled={fifthRunning ? false : true}
                      onPress={() => {
                        setFifthRunning(false);

                        setValidation({
                          ...validation,
                          timer: true,
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
                    </Pressable>
                  </Text>
                </View>
                <View style={{padding: 3}}>
                  <Text style={{fontSize: 20, color: '#fff'}}>{fifthTime}</Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <Pressable
            style={{
              ...styles.submitButton,
              backgroundColor:
                validationTimer && validation.timer ? '#EA8B5B' : 'grey',
            }}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.BackButton} onPress={backButton}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Parking;

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
    width: Dimensions.get('window').width * 0.35,
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

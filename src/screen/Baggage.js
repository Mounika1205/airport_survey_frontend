import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import ResetIcon from 'react-native-vector-icons/AntDesign';
import PlayIcon from 'react-native-vector-icons/AntDesign';
import StopIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {postQueueData} from '../apis/apis.services';
import {AuthContext} from './AuthContext/authContext';
import {run} from 'jest';

const Baggage = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const {token} = useContext(AuthContext);

  const [text, onChangeText] = useState('');

  const [flightNo, setFlightNo] = useState({
    firstFlight: '',
    secondFlight: '',
    thirdFlight: '',
    fourthFlight: '',
    fifthFlight: '',
  });

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

  const [submit, setSubmit] = useState(false);

  const [millisec, setMilliSec] = useState({
    firstTimer: '00:00:00.0',
    secondTimer: '00:00:00.0',
    thirdTimer: '00:00:00.0',
    fourthTimer: '00:00:00.0',
    fifthTimer: '00:00:00.0',
  });

  const [validation, setValidation] = useState({
    flight1_first_bag: false,
    flight1_last_bag: false,
    flight2_first_bag: false,
    flight2_last_bag: false,
    flight3_first_bag: false,
    flight3_last_bag: false,
    flight4_first_bag: false,
    flight4_last_bag: false,
    flight5_first_bag: false,
    flight5_last_bag: false,
  });

  const [resetValidation, setResetValidation] = useState({
    firstFlight: false,
    secondFlight: false,
    thirdFlight: false,
    fourthFlight: false,
    fifthFlight: false,
  });

  console.log(time);

  const updateState = (key, value) => {
    setFlightNo(oldState => ({
      ...oldState,
      [key]: value,
    }));
  };
  const [timeRecorded, setTimeRecorded] = useState({
    flightNo_1: {
      firstFlightNo: '',
      first_bag: '00.00.00',
      last_bag: '00:00:00.0',
    },
    flightNo_2: {
      secondFlightNo: '',
      first_bag: '00.00.00',
      last_bag: '00:00:00.0',
    },
    flightNo_3: {
      thirdFlightNo: '',
      first_bag: '00.00.00',
      last_bag: '00:00:00.0',
    },
    flightNo_4: {
      fourthFlightNo: '',
      first_bag: '00.00.00',
      last_bag: '00:00:00.0',
    },
    flightNo_5: {
      fifthFlightNo: '',
      first_bag: '00.00.00',
      last_bag: '00:00:00.0',
    },
  });
  useEffect(() => {
    setTimeRecorded(prevState => ({
      ...prevState,
      flightNo_1: {
        ...prevState.flightNo_1,
        firstFlightNo: flightNo.firstFlight,
        first_bag: beforeStart.firstTimer,
        last_bag: time.firstTimer,
      },
      flightNo_2: {
        ...prevState.flightNo_2,
        secondFlightNo: flightNo.secondFlight,
        first_bag: beforeStart.secondTimer,
        last_bag: time.secondTimer,
      },
      flightNo_3: {
        ...prevState.flightNo_3,
        thirdFlightNo: flightNo.thirdFlight,
        first_bag: beforeStart.thirdTimer,
        last_bag: time.thirdTimer,
      },
      flightNo_4: {
        ...prevState.flightNo_4,
        fourthFlightNo: flightNo.fourthFlight,
        first_bag: beforeStart.fourthTimer,
        last_bag: time.fourthTimer,
      },
      flightNo_5: {
        ...prevState.flightNo_5,
        fifthFlightNo: flightNo.fifthFlight,
        first_bag: beforeStart.fifthTimer,
        last_bag: time.fifthTimer,
      },
    }));
  }, [
    running.firstTimer,
    running.secondTimer,
    running.thirdTimer,
    running.fourthTimer,
    running.fifthTimer,
  ]);

  const handleSubmit = async () => {
    if (
     !validation.flight5_last_bag &&
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
        meta_data: {},
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
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Error',
          'Data is not created ',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('BAGGAGE'),
            },
          ],
          {cancelable: false},
        );
      }
    }
    else {
      Alert.alert('Please Fill or Enter all the details');
    }
  };


  return (
    <View style={styles.contain}>
      <Text style={styles.title}>BAGGAGE</Text>

      <ScrollView>
        <View style={styles.section}>
          <View style={styles.timer_background}>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.lines}>Flight No :</Text>
                <TextInput
                  style={styles.input}
                  value={flightNo.firstFlight}
                  onChangeText={text => updateState('firstFlight', text)}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setResetValidation({
                      ...resetValidation,
                      firstFlight: false,
                    });
                    setFlightNo({
                      ...flightNo,
                      firstFlight: '',
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
                      flight1_first_bag: false,
                    });
                  }}>
                  <View>
                    <Text style={{}}>
                      <ResetIcon
                        name="retweet"
                        size={25}
                        color="#fff"
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
                marginTop: 20,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  First Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        flightNo.firstFlight != '' &&
                        !validation.flight1_first_bag
                          ? false
                          : true
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
                        name="playcircleo"
                        size={28}
                        color="#fff"
                        style={{margin: 4}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {beforeStart.firstTimer}
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  Last Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        running.firstTimer && !validation.flight1_last_bag
                          ? false
                          : true
                      }
                      onPress={() => {
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setResetValidation({
                          ...resetValidation,
                          firstFlight: false,
                        });

                        setTime({
                          ...time,
                          firstTimer: presentTime,
                        });
                        setRunning(prevState => ({
                          ...prevState,
                          firstTimer: false,
                        }));
                        setValidation({
                          ...validation,
                          flight1_first_bag: true,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.firstTimer}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.timer_background}>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.lines}>Flight No :</Text>
                <TextInput
                  editable={validation.flight1_first_bag ? true : false}
                  style={styles.input}
                  value={flightNo.secondFlight}
                  onChangeText={text => updateState('secondFlight', text)}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setResetValidation({
                      ...resetValidation,
                      secondFlight: true,
                    });
                    setFlightNo({
                      ...flightNo,
                      secondFlight: '',
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
                      flight2_first_bag: false,
                      flight2_last_bag: false,
                    });
                  }}>
                  <View>
                    <Text style={{}}>
                      <ResetIcon
                        name="retweet"
                        size={25}
                        color="#fff"
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
                marginTop: 20,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  First Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        flightNo.secondFlight != '' &&
                        !validation.flight2_first_bag
                          ? false
                          : true
                      }
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
                        setValidation({...validation, flight1_last_bag: true});
                      }}>
                      <PlayIcon
                        name="playcircleo"
                        size={28}
                        color="#fff"
                        style={{margin: 4}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {beforeStart.secondTimer}
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  Last Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        running.secondTimer && !validation.flight2_last_bag
                          ? false
                          : true
                      }
                      onPress={() => {
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setResetValidation({
                          ...resetValidation,
                          secondFlight: false,
                        });
                        setTime({...time, secondTimer: presentTime});
                        setValidation({...validation, flight2_first_bag: true});
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.secondTimer}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.timer_background}>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.lines}>Flight No</Text>
                <TextInput
                  editable={running.secondTimer ? true : false}
                  style={styles.input}
                  value={flightNo.thirdFlight}
                  onChangeText={text => updateState('thirdFlight', text)}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setResetValidation({
                      ...resetValidation,
                      thirdFlight: false,
                    });
                    setFlightNo({
                      ...flightNo,
                      thirdFlight: '',
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
                      flight3_first_bag: false,
                      flight3_last_bag: false,
                    });
                  }}>
                  <View>
                    <Text style={{}}>
                      <ResetIcon
                        name="retweet"
                        size={25}
                        color="#fff"
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
                marginTop: 20,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  First Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        flightNo.thirdFlight != '' &&
                        !validation.flight3_first_bag
                          ? false
                          : true
                      }
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
                        setValidation({...validation, flight2_last_bag: true});
                      }}>
                      <PlayIcon
                        name="playcircleo"
                        size={28}
                        color="#fff"
                        style={{margin: 4}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {beforeStart.thirdTimer}
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  Last Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        running.thirdTimer && !validation.flight3_last_bag
                          ? false
                          : true
                      }
                      onPress={() => {
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setTime({...time, thirdTimer: presentTime});
                        setValidation({
                          ...validation,
                          flight3_first_bag: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          thirdFlight: false,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.thirdTimer}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.timer_background}>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.lines}>Flight No :</Text>
                <TextInput
                  editable={running.thirdTimer ? true : false}
                  style={styles.input}
                  value={flightNo.fourthFlight}
                  onChangeText={text => updateState('fourthFlight', text)}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setResetValidation({
                      ...resetValidation,
                      fourthFlight: true,
                    });
                    setFlightNo({
                      ...flightNo,
                      fourthFlight: '',
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
                      flight4_first_bag: false,
                      flight4_last_bag: false,
                    });
                  }}>
                  <View>
                    <Text style={{}}>
                      <ResetIcon
                        name="retweet"
                        size={25}
                        color="#fff"
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
                marginTop: 20,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  First Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        flightNo.fourthFlight != '' &&
                        !validation.flight4_first_bag
                          ? false
                          : true
                      }
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
                          flight3_last_bag: true,
                        });
                      }}>
                      <PlayIcon
                        name="playcircleo"
                        size={28}
                        color="#fff"
                        style={{margin: 4}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {beforeStart.fourthTimer}
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  Last Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        running.fourthTimer && !validation.flight4_last_bag
                          ? false
                          : true
                      }
                      onPress={() => {
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setTime({...time, fourthTimer: presentTime});
                        setValidation({
                          ...validation,
                          flight4_first_bag: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          fourthFlight: false,
                        });
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.fourthTimer}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.timer_background}>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.lines}>Flight No :</Text>
                <TextInput
                  editable={running.fourthTimer ? true : false}
                  style={styles.input}
                  value={flightNo.fifthFlight}
                  onChangeText={text => updateState('fifthFlight', text)}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setResetValidation({
                      ...resetValidation,
                      fifthFlight: true,
                    });
                    setFlightNo({
                      ...flightNo,
                      fifthFlight: '',
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
                      flight5_first_bag: false,
                      flight5_last_bag:false
                    });
                  }}>
                  <View>
                    <Text style={{}}>
                      <ResetIcon
                        name="retweet"
                        size={25}
                        color="#fff"
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
                marginTop: 10,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  First Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={
                        flightNo.fifthFlight != '' &&
                        !validation.flight5_first_bag
                          ? false
                          : true
                      }
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
                        setRunning({
                          ...running,
                          fifthTimer: true,
                        });

                        setValidation({
                          ...validation,
                          flight4_last_bag: true,
                        });
                      }}>
                      <PlayIcon
                        name="playcircleo"
                        size={28}
                        color="#fff"
                        style={{margin: 4}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {beforeStart.fifthTimer}
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'white', margin: 5}}>
                  Last Bag
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      disabled={running.fifthTimer && !validation.flight5_last_bag ? false : true}
                      onPress={() => {
                        let date = new Date();
                        const presentTime = date.toLocaleTimeString('en-US', {
                          hour12: false,
                        });
                        setTime({...time, fifthTimer: presentTime});
                        setRunning(prevState => ({
                          ...prevState,
                          fifthTimer: false,
                        }));
                        setValidation({
                          ...validation,
                          flight5_first_bag: true,
                        });
                        setResetValidation({
                          ...resetValidation,
                          fifthFlight: false,
                        });
                        setSubmit(true);
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.fifthTimer}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              ...styles.submitButton,
              backgroundColor:  !validation.flight5_last_bag &&
              !resetValidation.firstReset &&
              !resetValidation.secondReset &&
              !resetValidation.thirdReset &&
              !resetValidation.fourthReset &&
              !resetValidation.fifthReset ? '#EA8B5B' : 'grey',
            }}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              navigation.navigate('Area', {
                airportValue,
                terminal,
              });
            }}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Baggage;

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
  section: {
    display: 'flex',
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  lines: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    width: Dimensions.get('window').width * 0.2,
    margin: 5,
    padding: 2,
    backgroundColor: '#fff',
    color: '#000',
  },

  timer_background: {
    backgroundColor: '#EA8B5B',
    marginHorizontal: 30,
    marginTop: 8,
    width: Dimensions.get('window').width * 0.7,
    // height: Dimensions.get('window').height * 0.18,
    padding: 15,
    borderRadius: 5,
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

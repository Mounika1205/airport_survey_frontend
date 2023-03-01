import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import ResetIcon from 'react-native-vector-icons/AntDesign';
import PlayIcon from 'react-native-vector-icons/Ionicons';
import StopIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AuthContext} from './AuthContext/authContext';
import {postQueueData} from '../apis/apis.services';
import {run} from 'jest';

const Securityy = () => {
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
    sixthTimer: '00:00:00',
    seventhTimer: '00:00:00',
    eighthTimer: '00:00:00',
    ninthTimer: '00:00:00',
  });
  const [running, setRunning] = useState({
    firstTimer: false,
    secondTimer: false,
    thirdTimer: false,
    fourthTimer: false,
    fifthTimer: false,
    sixthTimer: false,
    seventhTimer: false,
    eighthTimer: false,
    ninthTimer: false,
  });

  const [beforeStart, setBeforeStart] = useState({
    firstTimer: '00:00:00',
    secondTimer: '00:00:00',
    thirdTimer: '00:00:00',
    fourthTimer: '00:00:00',
    fifthTimer: '00:00:00',
    sixthTimer: '00:00:00',
    seventhTimer: '00:00:00',
    eighthTimer: '00:00:00',
    ninthTimer: '00:00:00',
  });

  const [selectedTimer, setSelectedTimer] = useState('');

  const [validation, setValidation] = useState({
    timers: false,
    firstTimer: false,
    secondTimer: false,
    thirdTimer: false,
    fourthTimer: false,
    fifthTimer: false,
    sixthTimer: false,
    seventhTimer: false,
    eighthTimer: false,
    ninthTimer: false,
  });

  const [millisec, setMilliSec] = useState({
    firstTimer: '00:00:00.0',
    secondTimer: '00:00:00.0',
    thirdTimer: '00:00:00.0',
    fourthTimer: '00:00:00.0',
    fifthTimer: '00:00:00.0',
    sixthTimer: '00:00:00.0',
    seventhTimer: '00:00:00.0',
    eighthTimer: '00:00:00.0',
    ninthTimer: '00:00:00.0',
  });

  const [resetValidation, setResetValidation] = useState({
    firstTimer: false,
    secondTimer: false,
    thirdTimer: false,
    fourthTimer: false,
    fifthTimer: false,
    sixthTimer: false,
    seventhTimer: false,
    eighthTimer: false,
    ninthTimer: false,
  });

  const [timeRecorded, setTimeRecorded] = useState([
    {
      passenger1: {
        firstTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
        secondTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
        thirdTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
      },
      passenger2: {
        firstTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
        secondTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
        thirdTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
      },
      passenger3: {
        firstTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
        secondTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
        thirdTimer: {
          start_time: '00:00:00',
          end_time: '00:00:00.0',
        },
      },
    },
  ]);

  // const [timeRecorded, setTimeRecorded] = useState({
  //   line1: {
  //     start_time: '00:00:00',
  //     end_time: '00:00:00.0',
  //   },
  //   line2: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',
  //   },
  //   line3: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',
  //   },
  //   line4: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',
  //   },
  //   line5: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',console
  //   },
  //   line6: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',
  //   },
  //   line7: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',
  //   },
  //   line8: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',
  //   },
  //   line9: {
  //     start_time: '00.00.00',
  //     end_time: '00:00:00.0',
  //   },
  // });

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
      clearInterval(interval);

      // setTimeRecorded(prevState => ({
      //   ...prevState,
      //   line1: {
      //     ...prevState.line1,
      //     start_time: beforeStart.firstTimer,
      //     end_time: millisec.firstTimer,
      //   },
      //   line2: {
      //     ...prevState.line2,
      //     start_time: beforeStart.secondTimer,
      //     end_time: millisec.secondTimer,
      //   },
      //   line3: {
      //     ...prevState.line3,
      //     start_time: beforeStart.thirdTimer,
      //     end_time: millisec.thirdTimer,
      //   },
      //   line4: {
      //     ...prevState.line4,
      //     start_time: beforeStart.fourthTimer,
      //     end_time: millisec.fourthTimer,
      //   },
      //   line5: {
      //     ...prevState.line5,
      //     start_time: beforeStart.fifthTimer,
      //     end_time: millisec.fifthTimer,
      //   },
      //   line6: {
      //     ...prevState.line6,
      //     start_time: beforeStart.sixthTimer,
      //     end_time: millisec.sixthTimer,
      //   },
      //   line7: {
      //     ...prevState.line7,
      //     start_time: beforeStart.seventhTimer,
      //     end_time: millisec.seventhTimer,
      //   },
      //   line8: {
      //     ...prevState.line8,
      //     start_time: beforeStart.eighthTimer,
      //     end_time: millisec.eighthTimer,
      //   },
      //   line9: {
      //     ...prevState.line9,
      //     start_time: beforeStart.ninthTimer,
      //     end_time: millisec.ninthTimer,
      //   },
      // }));
      const data = [...timeRecorded];
      data[0].passenger1.firstTimer.start_time = beforeStart.firstTimer;
      data[0].passenger1.firstTimer.end_time = millisec.firstTimer;
      data[0].passenger1.secondTimer.start_time = beforeStart.secondTimer;
      data[0].passenger1.secondTimer.end_time = millisec.secondTimer;
      data[0].passenger1.thirdTimer.start_time = beforeStart.thirdTimer;
      data[0].passenger1.thirdTimer.end_time = millisec.thirdTimer;
      data[0].passenger2.firstTimer.start_time = beforeStart.fourthTimer;
      data[0].passenger2.firstTimer.end_time = millisec.fourthTimer;
      data[0].passenger2.secondTimer.start_time = beforeStart.fifthTimer;
      data[0].passenger2.secondTimer.end_time = millisec.fifthTimer;
      data[0].passenger2.thirdTimer.start_time = beforeStart.sixthTimer;
      data[0].passenger2.thirdTimer.end_time = millisec.sixthTimer;
      data[0].passenger3.firstTimer.start_time = beforeStart.seventhTimer;
      data[0].passenger3.firstTimer.end_time = millisec.seventhTimer;
      data[0].passenger3.secondTimer.start_time = beforeStart.eighthTimer;
      data[0].passenger3.secondTimer.end_time = millisec.eighthTimer;
      data[0].passenger3.thirdTimer.start_time = beforeStart.ninthTimer;
      data[0].passenger3.thirdTimer.end_time = millisec.ninthTimer;

      setTimeRecorded(data);
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
    running.sixthTimer,
    running.seventhTimer,
    running.eighthTimer,
    running.ninthTimer,
  ]);

  const handleSubmit = async () => {
    if (
      !validation.ninthTimer &&
      !resetValidation.firstReset &&
      !resetValidation.secondReset &&
      !resetValidation.thirdReset &&
      !resetValidation.fourthReset &&
      !resetValidation.fifthReset &&
      !resetValidation.sixthTimer &&
      !resetValidation.seventhTimer &&
      !resetValidation.eighthTimer &&
      !resetValidation.ninthTimer
    ) {
      const final = {
        airport_name: airportValue,
        terminal: terminal,
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
          'Data is not created Successfully',
          [
            {
              text: 'OK',
              onPress: () =>
                navigation.navigate('SECURITY', {airportValue, terminal}),
            },
          ],
          {cancelable: false},
        );
      }
    } else {
      Alert.alert('Please Enter or Fill all the details');
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
      <Text style={styles.title}>SECURITY</Text>
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
                  console.log(running);
                  setResetValidation({
                    ...resetValidation,
                    firstTimer: true,
                    secondTimer: true,
                    thirdTimer: true,
                  });
                  setTime({
                    ...time,
                    firstTimer: '00:00:00',
                    secondTimer: '00:00:00',
                    thirdTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    firstTimer: '00:00:00',
                    secondTimer: '00:00:00',
                    thirdTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    firstTimer: false,
                    secondTimer: false,
                    thirdTimer: false,
                  });

                  const data = [...timeRecorded];
                  data[0].passenger1.firstTimer.start_time = '00:00:00';
                  data[0].passenger1.firstTimer.end_time = '00:00:00.0';
                  data[0].passenger1.secondTimer.start_time = '00:00:00';
                  data[0].passenger1.secondTimer.end_time = '00:00:00.0';
                  data[0].passenger1.thirdTimer.start_time = '00:00:00';
                  data[0].passenger1.thirdTimer.end_time = '00:00:00.0';

                  setTimeRecorded(data);

                  setValidation({
                    ...validation,
                    timers: false,
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
          <View style={styles.timer_background}>
            <View style={{}}>
              <View>
                <Text style={styles.lines}>Security Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.timers ? true : false}
                          onPress={() => {
                            setSelectedTimer('firstTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
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
                          onPress={() => {
                            setRunning({
                              ...running,
                              firstTimer: false,
                            });
                            setValidation({
                              ...validation,
                              firstTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              firstTimer: false,
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
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Frisking Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.firstTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('secondTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
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
                              timers: true,
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
                              secondTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              secondTimer: false,
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
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Frisking :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.secondTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('thirdTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
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
                              firstTimer: false,
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
                              thirdTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              thirdTimer: false,
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
                  console.log(running);
                  setResetValidation({
                    ...resetValidation,
                    fourthTimer: true,
                    fifthTimer: true,
                    sixthTimer: true,
                  });
                  setTime({
                    ...time,
                    fourthTimer: '00:00:00',
                    fifthTimer: '00:00:00',
                    sixthTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    fourthTimer: '00:00:00',
                    fifthTimer: '00:00:00',
                    sixthTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    fourthTimer: false,
                    fifthTimer: false,
                    sixthTimer: false,
                  });
                  const data = [...timeRecorded];

                  data[0].passenger2.firstTimer.start_time = '00:00:00';
                  data[0].passenger2.firstTimer.end_time = '00:00:00.0';
                  data[0].passenger2.secondTimer.start_time = '00:00:00';
                  data[0].passenger2.secondTimer.end_time = '00:00:00.0';
                  data[0].passenger2.thirdTimer.start_time = '00:00:00';
                  data[0].passenger2.thirdTimer.end_time = '00:00:00.0';
                  setTimeRecorded(data);

                  setValidation({
                    ...validation,
                    thirdTimer: true,
                    fourthTimer: false,
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
          <View style={styles.timer_background}>
            <View style={{}}>
              <View>
                <Text style={styles.lines}>Security Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.thirdTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('fourthTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
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
                              secondTimer: false,
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
                          onPress={() => {
                            setRunning({
                              ...running,
                              fourthTimer: false,
                            });
                            setValidation({
                              ...validation,
                              fourthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              fourthTimer: false,
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
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Frisking Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.fourthTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('fifthTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
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
                              thirdTimer: false,
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
                              fifthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              fifthTimer: false,
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
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Frisking :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.fifthTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('sixthTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
                            setBeforeStart(prevState => ({
                              ...prevState,
                              sixthTimer: presentTime,
                            }));
                            setRunning(prevState => ({
                              ...prevState,
                              sixthTimer: true,
                            }));
                            setValidation({
                              ...validation,
                              fourthTimer: false,
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
                        {beforeStart.sixthTimer}
                      </Text>
                    </View>
                  </Text>
                </View>

                <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <TouchableOpacity
                          disabled={running.sixthTimer ? false : true}
                          onPress={() => {
                            setRunning({
                              ...running,
                              sixthTimer: false,
                            });
                            setValidation({
                              ...validation,
                              sixthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              sixthTimer: false,
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
                        {time.sixthTimer}
                      </Text>
                    </View>
                  </Text>
                </View>
              </View>
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
                    seventhTimer: true,
                    eighthTimer: true,
                    ninthTimer: true,
                  });
                  setTime({
                    ...time,
                    seventhTimer: '00:00:00',
                    eighthTimer: '00:00:00',
                    ninthTimer: '00:00:00',
                  });
                  setBeforeStart({
                    ...beforeStart,
                    seventhTimer: '00:00:00',
                    eighthTimer: '00:00:00',
                    ninthTimer: '00:00:00',
                  });
                  setRunning({
                    ...running,
                    seventhTimer: false,
                    eighthTimer: false,
                    ninthTimer: false,
                  });

                  const data = [...timeRecorded];

                  data[0].passenger3.firstTimer.start_time = '00:00:00';
                  data[0].passenger3.firstTimer.end_time = '00:00:00.0';
                  data[0].passenger3.secondTimer.start_time = '00:00:00';
                  data[0].passenger3.secondTimer.end_time = '00:00:00.0';
                  data[0].passenger3.thirdTimer.start_time = '00:00:00';
                  data[0].passenger3.thirdTimer.end_time = '00:00:00.0';
                  setTimeRecorded(data);
                  setValidation({
                    ...validation,
                    sixthTimer: true,
                    seventhTimer: false,
                    eighthTimer: false,
                    ninthTimer: false,
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
              <View>
                <Text style={styles.lines}>Security Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.sixthTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('seventhTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
                            setBeforeStart(prevState => ({
                              ...prevState,
                              seventhTimer: presentTime,
                            }));
                            setRunning(prevState => ({
                              ...prevState,
                              seventhTimer: true,
                            }));
                            setValidation({
                              ...validation,
                              fifthTimer: false,
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
                        {beforeStart.seventhTimer}
                      </Text>
                    </View>
                  </Text>
                </View>

                <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <TouchableOpacity
                          disabled={running.seventhTimer ? false : true}
                          onPress={() => {
                            setRunning({
                              ...running,
                              seventhTimer: false,
                            });
                            setValidation({
                              ...validation,
                              seventhTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              seventhTimer: false,
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
                        {time.seventhTimer}
                      </Text>
                    </View>
                  </Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Frisking Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.seventhTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('eighthTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
                            setBeforeStart(prevState => ({
                              ...prevState,
                              eighthTimer: presentTime,
                            }));
                            setRunning(prevState => ({
                              ...prevState,
                              eighthTimer: true,
                            }));
                            setValidation({
                              ...validation,
                              sixthTimer: false,
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
                        {beforeStart.eighthTimer}
                      </Text>
                    </View>
                  </Text>
                </View>

                <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <TouchableOpacity
                          disabled={running.eighthTimer ? false : true}
                          onPress={() => {
                            setRunning({
                              ...running,
                              eighthTimer: false,
                            });
                            setValidation({
                              ...validation,
                              eighthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              eighthTimer: false,
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
                        {time.eighthTimer}
                      </Text>
                    </View>
                  </Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Frisking :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                }}>
                <View style={{}}>
                  <Text>
                    <View style={{}}>
                      <Text>
                        <TouchableOpacity
                          disabled={validation.eighthTimer ? false : true}
                          onPress={() => {
                            setSelectedTimer('ninthTimer');
                            let date = new Date();
                            const presentTime = date.toLocaleTimeString(
                              'en-US',
                              {hour12: false},
                            );
                            setBeforeStart(prevState => ({
                              ...prevState,
                              ninthTimer: presentTime,
                            }));
                            setRunning(prevState => ({
                              ...prevState,
                              ninthTimer: true,
                            }));
                            setValidation({
                              ...validation,
                              seventhTimer: false,
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
                        {beforeStart.ninthTimer}
                      </Text>
                    </View>
                  </Text>
                </View>

                <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <TouchableOpacity
                          disabled={running.ninthTimer ? false : true}
                          onPress={() => {
                            setRunning({
                              ...running,
                              ninthTimer: false,
                            });
                            setValidation({
                              ...validation,
                              ninthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              ninthTimer: false,
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
                        {time.ninthTimer}
                      </Text>
                    </View>
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
              backgroundColor: validation.ninthTimer ? '#EA8B5B' : 'grey',
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

export default Securityy;

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
  timer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  timer_background: {
    backgroundColor: '#EA8B5B',
    marginHorizontal: 30,
    marginTop: 8,
    width: Dimensions.get('window').width * 0.8,
    padding: 10,
    borderRadius: 5,
  },

  watch: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginHorizontal: 10,
  },
  lines: {
    color: 'white',
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 20,
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
  btncontainer: {
    display: 'flex',
    borderWidth: 2,
    flexDirection: 'row',
  },
});

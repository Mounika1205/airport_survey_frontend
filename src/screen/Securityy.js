import {
  View,
  Text,
  StyleSheet,
  Pressable,
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

  const [sixthRunning, setSixthRunning] = useState(false);
  const [sixthTime, setSixthTime] = useState('00:00:00');

  const [seventhRunning, setSeventhRunning] = useState(false);
  const [seventhTime, setSeventhTime] = useState('00:00:00');

  const [eighthRunning, setEighthRunning] = useState(false);
  const [eighthTime, setEighthTime] = useState('00:00:00');

  const [ninthRunning, setNinthRunning] = useState(false);
  const [ninthTime, setNinthTime] = useState('00:00:00');

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
  const [validationTimer, setValidationTimer] = useState(false);

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
      const data = [...timeRecorded];
      data[0].passenger1.firstTimer.start_time = beforeStart.firstTimer;
      data[0].passenger1.firstTimer.end_time = firstTime;
      setTimeRecorded(data);
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
      const data = [...timeRecorded];
      data[0].passenger1.secondTimer.start_time = beforeStart.secondTimer;
      data[0].passenger1.secondTimer.end_time = secondTime;
      setTimeRecorded(data);
    }
    return () => {
      clearInterval(interval);
    };
  }, [secondRunning]);

  useEffect(() => {
    let interval;

    if (thirdRunning) {
      console.log('its ruingggggggggggggg');
      interval = setInterval(() => {
        console.log(secondTime, 'before running');
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });
        console.log(presentTime, 'after runnuing');

        setThirdTime(presentTime);
      }, 1000);
    } else if (!thirdRunning) {
      clearInterval(interval);
      const data = [...timeRecorded];
      // data[0].passenger1.thirdTimer.start_time = beforeStart.thirdTimer;
      data[0].passenger1.thirdTimer.start_time =
        data[0].passenger1.secondTimer.end_time;
      data[0].passenger1.thirdTimer.end_time = thirdTime;

      setTimeRecorded(data);
    }
    return () => {
      clearInterval(interval);
    };
  }, [thirdRunning]);

  console.log(thirdTime, beforeStart.thirdTimer);

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
      const data = [...timeRecorded];
      data[0].passenger2.firstTimer.start_time = beforeStart.fourthTimer;
      data[0].passenger2.firstTimer.end_time = fourthTime;
      setTimeRecorded(data);
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
      const data = [...timeRecorded];
      data[0].passenger2.secondTimer.start_time = beforeStart.fifthTimer;
      data[0].passenger2.secondTimer.end_time = fifthTime;
      setTimeRecorded(data);
    }
    return () => {
      clearInterval(interval);
    };
  }, [fifthRunning]);

  useEffect(() => {
    let interval;

    if (sixthRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setSixthTime(presentTime);
      }, 1000);
    } else if (!sixthRunning) {
      clearInterval(interval);
      const data = [...timeRecorded];
      // data[0].passenger2.thirdTimer.start_time = beforeStart.sixthTimer;
      data[0].passenger2.thirdTimer.start_time =
        data[0].passenger2.secondTimer.end_time;

      data[0].passenger2.thirdTimer.end_time = sixthTime;
      setTimeRecorded(data);
    }
    return () => {
      clearInterval(interval);
    };
  }, [sixthRunning]);

  useEffect(() => {
    let interval;

    if (seventhRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setSeventhTime(presentTime);
      }, 1000);
    } else if (!seventhRunning) {
      clearInterval(interval);
      const data = [...timeRecorded];
      data[0].passenger3.firstTimer.start_time = beforeStart.seventhTimer;
      data[0].passenger3.firstTimer.end_time = seventhTime;
      setTimeRecorded(data);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seventhRunning]);

  useEffect(() => {
    let interval;

    if (eighthRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setEighthTime(presentTime);
      }, 1000);
    } else if (!eighthRunning) {
      clearInterval(interval);
      const data = [...timeRecorded];
      data[0].passenger3.secondTimer.start_time = beforeStart.eighthTimer;
      data[0].passenger3.secondTimer.end_time = eighthTime;
      setTimeRecorded(data);
    }
    return () => {
      clearInterval(interval);
    };
  }, [eighthRunning]);

  useEffect(() => {
    let interval;

    if (ninthRunning) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
        });

        setNinthTime(presentTime);
      }, 1000);
    } else if (!ninthRunning) {
      clearInterval(interval);
      const data = [...timeRecorded];
      // data[0].passenger3.thirdTimer.start_time = beforeStart.ninthTimer;
      data[0].passenger3.thirdTimer.start_time =
        data[0].passenger3.secondTimer.end_time;
      data[0].passenger3.thirdTimer.end_time = ninthTime;
      setTimeRecorded(data);
    }
    return () => {
      clearInterval(interval);
    };
  }, [ninthRunning]);

  const handleSubmit = async () => {
    if (validationTimer && validation.timers) {
      const final = {
        airport_name: airportValue,
        terminal: terminal,
        area: route.params.areaName,
        meta_data: {},
        time_recorded: timeRecorded,
      };
      console.log(final, 'iam api object');

      // Alert.alert("apiiii success")

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
              <Pressable
                onPress={() => {
                  setResetValidation({
                    ...resetValidation,
                    firstTimer: true,
                    secondTimer: true,
                    thirdTimer: true,
                  });

                  setBeforeStart({
                    ...beforeStart,
                    firstTimer: '00:00:00',
                    secondTimer: '00:00:00',
                    thirdTimer: '00:00:00',
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
                  setFirstRunning(false);
                  setFirstTime('00:00:00');

                  setSecondRunning(false);
                  setSecondTime('00:00:00');

                  setThirdRunning(false);
                  setThirdTime('00:00:00');
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
                        <Pressable
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
                              timers: true,

                              firstTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              firstTimer: false,
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
                        <Pressable
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

                            setValidation({
                              ...validation,
                              timers: true,
                            });
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
                              timers: true,

                              secondTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              secondTimer: false,
                            });
                            setSecondRunning(false);
                            setThirdRunning(true);
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
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Frisking :</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginHorizontal: 30,
                  alignContent: 'center',
                  // borderWidth:'2'
                }}>
                <View style={{}}>
                  <Text>
                    {
                      <>
                        <View style={{}}>
                          <Text>
                            {!thirdRunning ? (
                              <>
                                <Pressable
                                  onPress={() => {
                                    setSelectedTimer('thirdTimer');
                                    let date = new Date();
                                    const presentTime = date.toLocaleTimeString(
                                      'en-US',
                                      {hour12: false},
                                    );
                                    setBeforeStart(prevState => ({
                                      ...prevState,
                                      thirdTimer: secondTime,
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
                                <View style={{padding: 3}}>
                                  <Text style={{fontSize: 20, color: '#fff'}}>
                                    {thirdTime
                                      ? thirdTime
                                      : beforeStart.thirdTimer}
                                  </Text>
                                </View>
                              </>
                            ) : (
                              <>
                                <Pressable
                                  disabled={thirdRunning ? false : true}
                                  onPress={() => {
                                    setValidation({
                                      ...validation,
                                      timers: true,

                                      thirdTimer: true,
                                    });
                                    setResetValidation({
                                      ...resetValidation,
                                      thirdTimer: false,
                                    });
                                    setThirdRunning(false);
                                  }}>
                                  <StopIcon
                                    name="stop-circle-outline"
                                    size={28}
                                    color="#ffff"
                                  />
                                </Pressable>
                                <View style={{padding: 3}}>
                                  <Text style={{fontSize: 20, color: '#fff'}}>
                                    {thirdTime}
                                  </Text>
                                </View>
                              </>
                            )}
                          </Text>
                        </View>
                      </>
                    }
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
              <Pressable
                onPress={() => {
                  setResetValidation({
                    ...resetValidation,
                    fourthTimer: true,
                    fifthTimer: true,
                    sixthTimer: true,
                  });

                  setBeforeStart({
                    ...beforeStart,
                    fourthTimer: '00:00:00',
                    fifthTimer: '00:00:00',
                    sixthTimer: '00:00:00',
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
                    timers: false,

                    thirdTimer: true,
                    fourthTimer: false,
                    fifthTimer: false,
                  });
                  setFifthRunning(false);
                  setSixthRunning(false);
                  setFourthRunning(false);

                  setFourthTime('00:00:00');
                  setFifthTime('00:00:00');
                  setSixthTime('00:00:00');
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
                        <Pressable
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
                            setValidation({
                              ...validation,
                              timers: true,
                              fourthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              fourthTimer: false,
                            });
                            setFourthRunning(false);
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
                        <Pressable
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
                            setValidation({
                              ...validation,
                              timers: true,

                              fifthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              fifthTimer: false,
                            });
                            setFifthRunning(false);
                            setSixthRunning(true);
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
                        {fifthTime}
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
                  alignItems: 'center',
                  marginHorizontal: 30,
                  alignContent: 'center',
                }}>
                <View style={{}}>
                  <Text>
                    {
                      <>
                        <View style={{}}>
                          <Text>
                            {!sixthRunning ? (
                              <>
                                <Pressable
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
                                    setSixthRunning(true);
                                    setValidationTimer(true);
                                  }}>
                                  <PlayIcon
                                    name="play-circle-outline"
                                    size={28}
                                    color="#fff"
                                    style={{alignItems: 'center'}}
                                  />
                                </Pressable>
                                <View style={{padding: 3}}>
                                  <Text style={{fontSize: 20, color: '#fff'}}>
                                    {sixthTime
                                      ? sixthTime
                                      : beforeStart.sixthTimer}
                                  </Text>
                                </View>
                              </>
                            ) : (
                              <>
                                <Pressable
                                  disabled={sixthRunning ? false : true}
                                  onPress={() => {
                                    setValidation({
                                      ...validation,
                                      timers: true,

                                      sixthTimer: true,
                                    });
                                    setResetValidation({
                                      ...resetValidation,
                                      sixthTimer: false,
                                    });
                                    setSixthRunning(false);
                                  }}>
                                  <StopIcon
                                    name="stop-circle-outline"
                                    size={28}
                                    color="#ffff"
                                  />
                                </Pressable>
                                <View style={{padding: 3}}>
                                  <Text style={{fontSize: 20, color: '#fff'}}>
                                    {sixthTime}
                                  </Text>
                                </View>
                              </>
                            )}
                          </Text>
                        </View>
                      </>
                    }
                  </Text>

                  {/* <Text>
                    <View style={{}}>
                      <Text>
                        <Pressable
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
                            setSixthRunning(true);
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
                        {beforeStart.sixthTimer}
                      </Text>
                    </View>
                  </Text> */}
                </View>

                {/* <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <Pressable
                          disabled={sixthRunning ? false : true}
                          onPress={() => {
                            setValidation({
                              ...validation,
                              timers: true,

                              sixthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              sixthTimer: false,
                            });
                            setSixthRunning(false);
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
                        {sixthTime}
                      </Text>
                    </View>
                  </Text>
                </View> */}
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
              <Pressable
                onPress={() => {
                  setResetValidation({
                    ...resetValidation,
                    seventhTimer: true,
                    eighthTimer: true,
                    ninthTimer: true,
                  });

                  setBeforeStart({
                    ...beforeStart,
                    seventhTimer: '00:00:00',
                    eighthTimer: '00:00:00',
                    ninthTimer: '00:00:00',
                  });

                  setSeventhRunning(false);
                  setEighthRunning(false);
                  setNinthRunning(false);

                  setEighthTime('00:00:00');
                  setNinthTime('00:00:00');
                  setSeventhTime('00:00:00');

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
                    timers: false,

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
              </Pressable>
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
                        <Pressable
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

                            setSeventhRunning(true);
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
                        {beforeStart.seventhTimer}
                      </Text>
                    </View>
                  </Text>
                </View>

                <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <Pressable
                          disabled={seventhRunning ? false : true}
                          onPress={() => {
                            setValidation({
                              ...validation,
                              timers: true,

                              seventhTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              seventhTimer: false,
                            });
                            setSeventhRunning(false);
                            setValidationTimer(true);
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
                        {seventhTime}
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
                        <Pressable
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
                            setEighthRunning(true);
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
                        {beforeStart.eighthTimer}
                      </Text>
                    </View>
                  </Text>
                </View>

                <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <Pressable
                          disabled={eighthRunning ? false : true}
                          onPress={() => {
                            setValidation({
                              ...validation,
                              timers: true,
                              eighthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              eighthTimer: false,
                            });
                            setEighthRunning(false);
                            setNinthRunning(true);
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
                        {eighthTime}
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
                  alignItems: 'center',
                  marginHorizontal: 30,
                  alignContent: 'center',
                }}>
                <View style={{}}>
                  <Text>
                    {
                      <>
                        <View style={{}}>
                          <Text>
                            {!ninthRunning ? (
                              <>
                                <Pressable
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

                                    setNinthRunning(true);
                                    setValidationTimer(true);
                                  }}>
                                  <PlayIcon
                                    name="play-circle-outline"
                                    size={28}
                                    color="#fff"
                                    style={{alignItems: 'center'}}
                                  />
                                </Pressable>
                                <View style={{padding: 3}}>
                                  <Text style={{fontSize: 20, color: '#fff'}}>
                                    {ninthTime
                                      ? ninthTime
                                      : beforeStart.ninthTimer}
                                  </Text>
                                </View>
                              </>
                            ) : (
                              <>
                                <Pressable
                                  disabled={ninthRunning ? false : true}
                                  onPress={() => {
                                    setValidation({
                                      ...validation,
                                      timers: true,
                                      ninthTimer: true,
                                    });
                                    setResetValidation({
                                      ...resetValidation,
                                      ninthTimer: false,
                                    });
                                    setNinthRunning(false);
                                  }}>
                                  <StopIcon
                                    name="stop-circle-outline"
                                    size={28}
                                    color="#ffff"
                                  />
                                </Pressable>
                                <View style={{padding: 3}}>
                                  <Text style={{fontSize: 20, color: '#fff'}}>
                                    {ninthTime}
                                  </Text>
                                </View>
                              </>
                            )}
                          </Text>
                        </View>
                      </>
                    }
                  </Text>
                </View>
              </View>
              {/* <View
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
                        <Pressable
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

                            setNinthRunning(true);
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
                        {beforeStart.ninthTimer}
                      </Text>
                    </View>
                  </Text>
                </View>

                <View style={{}}>
                  <Text>
                    <View>
                      <Text>
                        <Pressable
                          disabled={ninthRunning ? false : true}
                          onPress={() => {
                            setValidation({
                              ...validation,
                              timers: true,
                              ninthTimer: true,
                            });
                            setResetValidation({
                              ...resetValidation,
                              ninthTimer: false,
                            });
                            setNinthRunning(false);
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
                        {ninthTime}
                      </Text>
                    </View>
                  </Text>
                </View>
              </View> */}
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <Pressable
            style={{
              ...styles.submitButton,
              backgroundColor:
                validationTimer && validation.timers
                  ? // validation.ninthTimer &&
                    // validation.firstTimer &&
                    // validation.secondTimer &&
                    // validation.thirdTimer &&
                    // validation.fourthTimer &&
                    // validation.fifthTimer &&
                    // validation.seventhTimer &&
                    // validation.eighthTimer &&
                    // validation.sixthTimer &&
                    // !resetValidation.firstReset &&
                    // !resetValidation.secondReset &&
                    // !resetValidation.thirdReset &&
                    // !resetValidation.fourthReset &&
                    // !resetValidation.fifthReset &&
                    // !resetValidation.sixthTimer &&
                    // !resetValidation.seventhTimer &&
                    // !resetValidation.eighthTimer &&
                    // !resetValidation.ninthTimer
                    '#EA8B5B'
                  : 'grey',
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

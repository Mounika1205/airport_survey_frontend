import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PlayIcon from 'react-native-vector-icons/AntDesign';
import StopIcon from 'react-native-vector-icons/Ionicons';
import ResetIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Transport = () => {
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

  // useEffect(() => {
  //   let interval;

  //   if (running[selectedTimer]) {
  //     interval = setInterval(() => {
  //       let date = new Date();

  //       const presentTime = date.toLocaleTimeString();
  //       setTime({
  //         ...time,
  //         [selectedTimer]: presentTime,
  //       });
  //     }, 10);
  //     console.log(time, 'gjadg');
  //   } else if (!running[selectedTimer]) {
  //     clearInterval(interval);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [
  //   running.firstTimer,
  //   running.secondTimer,
  //   running.thirdTimer,
  //   running.fourthTimer,
  //   running.fifthTimer,
  // ]);
  return (
    <View style={styles.contain}>
      <Text style={styles.title}>TRANSPORT </Text>
      <ScrollView>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <View>
              <Text style={{color: '#000', fontSize: 20}}>Passenger 1</Text>
            </View>

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
                  <ResetIcon name="retweet" size={25} color="#000" style={{}} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.timer_background}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log('iam true running', running);
                    setSelectedTimer('firstTimer');
                    {
                      setRunning({...running, firstTimer: true});
                    }
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();

                    {
                      setBeforeStart({...beforeStart, firstTimer: presentTime});
                    }

                    console.log(beforeStart);
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={30}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                {beforeStart.firstTimer}
              </Text>
            </View>
            <View>
              <Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('iam false running', running);

                        setRunning({...running, firstTimer: false});
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                    {time.firstTimer}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <View>
              <Text style={{color: '#000', fontSize: 20}}>Passenger 2</Text>
            </View>

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
                  <ResetIcon name="retweet" size={25} color="#000" style={{}} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.timer_background}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log('iam true running', running);
                    setSelectedTimer('secondTimer');
                    {
                      setRunning({...running, secondTimer: true});
                    }
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();

                    {
                      setBeforeStart({
                        ...beforeStart,
                        secondTimer: presentTime,
                      });
                    }

                    console.log(beforeStart);
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={30}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                {beforeStart.secondTimer}
              </Text>
            </View>
            <View>
              <Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('iam false running', running);

                        setRunning({...running, secondTimer: false});
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                    {time.secondTimer}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <View>
              <Text style={{color: '#000', fontSize: 20}}>Passenger 3</Text>
            </View>

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
                  <ResetIcon name="retweet" size={25} color="#000" style={{}} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.timer_background}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log('iam true running', running);
                    setSelectedTimer('thirdTimer');
                    {
                      setRunning({...running, thirdTimer: true});
                    }
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();

                    {
                      setBeforeStart({...beforeStart, thirdTimer: presentTime});
                    }

                    console.log(beforeStart);
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={30}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                {beforeStart.thirdTimer}
              </Text>
            </View>
            <View>
              <Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('iam false running', running);

                        setRunning({...running, thirdTimer: false});
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                    {time.thirdTimer}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <View>
              <Text style={{color: '#000', fontSize: 20}}>Passenger 4</Text>
            </View>

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
                  <ResetIcon name="retweet" size={25} color="#000" style={{}} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.timer_background}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log('iam true running', running);
                    setSelectedTimer('fourthTimer');
                    {
                      setRunning({...running, fourthTimer: true});
                    }
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();

                    {
                      setBeforeStart({
                        ...beforeStart,
                        fourthTimer: presentTime,
                      });
                    }

                    console.log(beforeStart);
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={30}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                {beforeStart.fourthTimer}
              </Text>
            </View>
            <View>
              <Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('iam false running', running);

                        setRunning({...running, fourthTimer: false});
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                    {time.fourthTimer}
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <View>
              <Text style={{color: '#000', fontSize: 20}}>Passenger 5</Text>
            </View>

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
                  <ResetIcon name="retweet" size={25} color="#000" style={{}} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.timer_background}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log('iam true running', running);
                    setSelectedTimer('fifthTimer');
                    {
                      setRunning({...running, fifthTimer: true});
                    }
                    let date = new Date();
                    const presentTime = date.toLocaleTimeString();

                    {
                      setBeforeStart({...beforeStart, fifthTimer: presentTime});
                    }

                    console.log(beforeStart);
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={30}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                {beforeStart.fifthTimer}
              </Text>
            </View>
            <View>
              <Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('iam false running', running);

                        setRunning({...running, fifthTimer: false});
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={{margin: 5, fontSize: 20, color: '#fff'}}>
                    {time.fifthTimer}
                  </Text>
                </View>
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

export default Transport;

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
    marginTop: 30,
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
  timer_background: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EA8B5B',
    marginTop: 8,
    width: Dimensions.get('window').width * 0.8,
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 35,
  },

  watch: {
    fontSize: 20,
    fontWeight: '800',
    color: '#696969',
  },
  section: {
    display: 'flex',
    marginTop: 30,
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

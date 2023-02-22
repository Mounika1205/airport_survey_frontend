import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ResetIcon from 'react-native-vector-icons/AntDesign';
import PlayIcon from 'react-native-vector-icons/AntDesign';
import StopIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Securityy = () => {
  const navigation = useNavigation();

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

  const currentTime  = new Date().toLocaleTimeString('en-US', {hour12: false});

  console.log(currentTime,"iammmmmmmmmmc current time ")

  useEffect(() => {
    let interval;

    if (running[selectedTimer]) {
      interval = setInterval(() => {
        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
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
    running.sixthTimer,
    running.seventhTimer,
    running.eighthTimer,
    running.ninthTimer,
  ]);

  console.log(running, 'runningggggg');
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
            style={styles.timer_background}>
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Security Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
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
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
                        setBeforeStart(prevState => ({
                          ...prevState,
                          
                          firstTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          firstTimer: true,
                          secondTimer: false,
                          thirdTimer: false,
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
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
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.firstTimer}
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
                  justifyContent: 'space-around',
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
                        
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
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
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.secondTimer}
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
                  justifyContent: 'space-around',
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
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
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
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.thirdTimer}
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
               
            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Security Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
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
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
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
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.fourthTimer}
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
                  justifyContent: 'space-around',
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
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
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
                        size={35}
                        color="#fff"
                        style={{}}
                      />
                    </TouchableOpacity>{' '}
                  </Text>
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.fifthTimer}
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
                  justifyContent: 'space-around',
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
                        setSelectedTimer('sixthTimer');
                        let date = new Date();
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
                        setBeforeStart(prevState => ({
                          ...prevState,
                          sixthTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          sixthTimer: true,
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {' '}
                    {beforeStart.sixthTimer}
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
                          sixthTimer: false,
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
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.sixthTimer}
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
                  console.log(running);
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

            <View style={{marginTop: 10}}>
              <View>
                <Text style={styles.lines}>Security Line :</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
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
                        setSelectedTimer('seventhTimer');
                        let date = new Date();
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
                        setBeforeStart(prevState => ({
                          ...prevState,
                          seventhTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          seventhTimer: true,
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {' '}
                    {beforeStart.seventhTimer}
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
                          seventhTimer: false,
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
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.seventhTimer}
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
                  justifyContent: 'space-around',
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
                        setSelectedTimer('eighthTimer');
                        let date = new Date();
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
                        setBeforeStart(prevState => ({
                          ...prevState,
                          eighthTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          eighthTimer: true,
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {' '}
                    {beforeStart.eighthTimer}
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
                          eighthTimer: false,
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
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.eighthTimer}
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
                  justifyContent: 'space-around',
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
                        setSelectedTimer('ninthTimer');
                        let date = new Date();
                        const presentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
                        setBeforeStart(prevState => ({
                          ...prevState,
                          ninthTimer: presentTime,
                        }));
                        setRunning(prevState => ({
                          ...prevState,
                          ninthTimer: true,
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

                  <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {' '}
                    {beforeStart.ninthTimer}
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
                          ninthTimer: false,
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
                  <Text style={{fontSize: 20, marginTop: 5, color: 'white'}}>
                    {' '}
                    {time.ninthTimer}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
             Alert.alert('Response submitted Successfully')
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

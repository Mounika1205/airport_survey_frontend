import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React,{useState,useEffect} from 'react';
  import ResetIcon from 'react-native-vector-icons/AntDesign';
  import PlayIcon from 'react-native-vector-icons/AntDesign';
  import StopIcon from 'react-native-vector-icons/Ionicons';
  import { useNavigation } from '@react-navigation/native';
  
  const Baggage = () => {
  
    const navigation =useNavigation();
  
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
      
    return (
      <View style={styles.contain}>
        <Text style={styles.title}>BAGGAGE</Text>
  
        <ScrollView>
          <View style={styles.section}>
            <View
              style={{
                backgroundColor: '#EA8B5B',
                marginHorizontal: 30,
                marginTop: 8,
                width: Dimensions.get('window').width * 0.7,
                height: Dimensions.get('window').height * 0.18,
                padding: 5,
                borderRadius: 5,
              }}>
              <View
                style={{
                  marginTop:10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={styles.lines}>Flight No</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => {
                      setTime({
                      ...time,
                      firstTimer: '00:00:00',
                    });
                    setBeforeStart({
                      ...beforeStart,
                      firstTimer: '00:00:00',
                    });
                    setRunning({
                      ...running,firstTimer:false
                    })
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
                  marginTop:20,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>First Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
                      <TouchableOpacity     onPress={() => {
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
                          style={{margin: 4}}
                        />
                      </TouchableOpacity>{' '}
                    </Text>
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                  {beforeStart.firstTimer}
               
                    </Text>
                  </View>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>Last Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
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
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.firstTimer}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
  
          <View style={styles.section}>
            <View
              style={{
                backgroundColor: '#EA8B5B',
                marginHorizontal: 30,
                marginTop: 8,
                width: Dimensions.get('window').width * 0.7,
                height: Dimensions.get('window').height * 0.18,
                padding: 5,
                borderRadius: 5,
              }}>
              <View
                style={{
                  marginTop:10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={styles.lines}>Flight No</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => {
                      setTime({
                      ...time,
                      secondTimer: '00:00:00',
                    });
                    setBeforeStart({
                      ...beforeStart,
                      secondTimer: '00:00:00',
                    });
                    setRunning({
                      ...running,secondTimer:false
                    })
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
                  marginTop:20,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>First Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
                      <TouchableOpacity     onPress={() => {
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
                          style={{margin: 4}}
                        />
                      </TouchableOpacity>{' '}
                    </Text>
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                  {beforeStart.secondTimer}
               
                    </Text>
                  </View>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>Last Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
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
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.secondTimer}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
  
  
          <View style={styles.section}>
            <View
              style={{
                backgroundColor: '#EA8B5B',
                marginHorizontal: 30,
                marginTop: 8,
                width: Dimensions.get('window').width * 0.7,
                height: Dimensions.get('window').height * 0.18,
                padding: 5,
                borderRadius: 5,
              }}>
              <View
                style={{
                  marginTop:10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={styles.lines}>Flight No</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => {
                      setTime({
                      ...time,
                      thirdTimer: '00:00:00',
                    });
                    setBeforeStart({
                      ...beforeStart,
                      thirdTimer: '00:00:00',
                    });
                    setRunning({
                      ...running,thirdTimer:false
                    })
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
                  marginTop:20,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>First Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
                      <TouchableOpacity     onPress={() => {
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
                          style={{margin: 4}}
                        />
                      </TouchableOpacity>{' '}
                    </Text>
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                  {beforeStart.thirdTimer}
               
                    </Text>
                  </View>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>Last Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
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
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.thirdTimer}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
  
          <View style={styles.section}>
            <View
              style={{
                backgroundColor: '#EA8B5B',
                marginHorizontal: 30,
                marginTop: 8,
                width: Dimensions.get('window').width * 0.7,
                height: Dimensions.get('window').height * 0.18,
                padding: 5,
                borderRadius: 5,
              }}>
              <View
                style={{
                  marginTop:10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={styles.lines}>Flight No</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => {
                      setTime({
                      ...time,
                      fourthTimer: '00:00:00',
                    });
                    setBeforeStart({
                      ...beforeStart,
                      fourthTimer: '00:00:00',
                    });
                    setRunning({
                      ...running,fourthTimer:false
                    })
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
                  marginTop:20,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>First Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
                      <TouchableOpacity     onPress={() => {
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
                          style={{margin: 4}}
                        />
                      </TouchableOpacity>{' '}
                    </Text>
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                  {beforeStart.fourthTimer}
               
                    </Text>
                  </View>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>Last Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
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
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                    {time.fourthTimer}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
  
          <View style={styles.section}>
            <View
              style={{
                backgroundColor: '#EA8B5B',
                marginHorizontal: 30,
                marginTop: 8,
                width: Dimensions.get('window').width * 0.7,
                height: Dimensions.get('window').height * 0.18,
                padding: 5,
                borderRadius: 5,
              }}>
              <View
                style={{
                  marginTop:10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={styles.lines}>Flight No</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => {
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
                      fifthTimer:false
                    })
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
                  marginTop:20,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>First Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
                      <TouchableOpacity     onPress={() => {
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
                          style={{margin: 4}}
                        />
                      </TouchableOpacity>{' '}
                    </Text>
  
                    <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>
                  {beforeStart.fifthTimer}
               
                    </Text>
                  </View>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize: 20, color: 'white', margin: 5}}>Last Bag</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>
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
      marginTop: 10,
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
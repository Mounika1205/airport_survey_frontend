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

const Checkin = () => {
  const navigation = useNavigation();

  const [aiportValue, setAirportValue] = useState(null);

  
  const [counter, SetCounter] = useState(null);

  const [mannedValue, setMannedValue] = useState(null);

  const [classValue, setClassValue] = useState(null);
  

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

      <ScrollView>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
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
                    setSelectedTimer('firstTimer');

                    let date = new Date();
                    let presentTime = date.toLocaleTimeString();
                    setBeforeStart(prevState => ({
                      ...prevState,
                      firstTimer: presentTime,
                    }));
                    setRunning(prevState => ({
                      ...prevState,
                      firstTimer: true,
                    }));
                    console.log(running, 'iam  true running');
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={25}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.timer_text}>
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
                        setRunning({
                          ...running,
                          firstTimer: false,
                        });
                        console.log(running, 'iam running');
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={styles.timer_text}>
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
                    console.log(running, 'iam  true running');
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={25}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.timer_text}>
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
                        setRunning({
                          ...running,
                          secondTimer: false,
                        });
                        console.log(running, 'iam running');
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={styles.timer_text}>
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
                    console.log(running, 'iam  true running');
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={25}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.timer_text}>
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
                        setRunning({
                          ...running,
                          thirdTimer: false,
                        });
                        console.log(running, 'iam running');
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={styles.timer_text}>
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
                    console.log(running, 'iam  true running');
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={25}
                    color="#fff"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.timer_text}>
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
                        setRunning({
                          ...running,
                          fourthTimer: false,
                        });
                        console.log(running, 'iam running');
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={styles.timer_text}>
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
                    console.log(running, 'iam  true running');
                  }}>
                  <PlayIcon
                    name="playcircleo"
                    size={25}
                    color="#fff"
                    style={{marginHorizontal: 5,marginVertical:3}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.timer_text}>
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
                        setRunning({
                          ...running,
                          fifthTimer: false,
                        });
                        console.log(running, 'iam running');
                      }}>
                      <StopIcon
                        name="stop-circle-outline"
                        size={33}
                        color="#fff"
                        style={{marginHorizontal: 5}}
                      />
                    </TouchableOpacity>
                  </Text>
                  <Text style={styles.timer_text}>
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

export default Checkin;

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
    marginLeft: 8,
    // width: Dimensions.get('window').width * 0.3,

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
    color: '#fff',
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
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginTop: 20,
    marginBottom: 20,
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
  timer_text:{
    margin: 5, 
    fontSize: 18,
    color: '#fff'

  }
});

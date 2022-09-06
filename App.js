/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButton from './components/CustomButton';
import Timer from './components/Timer';
const App = () => {
  const [timer, setTimer] = useState(null);
  const [status, setstatus] = useState('stop');
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [laps, setLaps] = useState([]);
  const start = () => {
    let sec = seconds;
    let min = minutes;
    let hour = hours;
    let tempTimer = setInterval(() => {
      sec++;
      if (sec > 59) {
        sec = 0;
        min++;
        if (min > 59) {
          min = 0;
          hour++;
        }
      }
      setSeconds(sec);
      setMinutes(min);
      setHours(hour);
      setTimer(tempTimer);
    }, 1000);
    setTimer(timer);
    console.log(timer);
  };
  const onButtonStart = () => {
    setstatus('start');
    start();
  };

  const onButtonStop = () => {
    setstatus('stop');
    clearInterval(timer);
  };
  const onButtonClear = () => {
    setstatus('stop');
    clearInterval(timer);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  const addLap = () => {
    setLaps([
      ...laps,
      {
        hours,
        minutes,
        seconds,
      },
    ]);
  };
  return (
    <View
      style={{
        backgroundColor: '#323A5C',
        height: '100%',
        alignItems: 'center',
      }}>
      <Timer hours={hours} minutes={minutes} seconds={seconds} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 20,
          paddingLeft: 20,
          width: '100%',
          marginTop: 40,
        }}>
        <CustomButton text="Start" onClick={() => onButtonStart()} />
        {status != 'stop' && (
          <CustomButton text="Stop" onClick={() => onButtonStop()} />
        )}
        <CustomButton text="Clear" onClick={() => onButtonClear()} />
      </View>
      <View style={{marginTop: 20}}>
        <CustomButton text="Add Lap" onClick={addLap} />
      </View>
      <ScrollView style={{marginTop: 40}}>
        {laps.map((e, i) => (
          <View
            key={i}
            style={{
              marginTop: 30,
              borderRadius: 20,
              height: 100,
              width: 350,
              backgroundColor: '#545b93',
              paddingHorizontal: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#F8EE56'}}>{i + 1}.</Text>
            <Text style={{fontSize: 30, color: '#F8EE56', marginLeft: 10}}>
              {e.hours < 10 ? '0' + e.hours : e.hours} :{' '}
              {e.minutes < 10 ? '0' + e.minutes : e.minutes} :{' '}
              {e.seconds < 10 ? '0' + e.seconds : e.seconds}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  commonButton: {
    backgroundColor: 'green',
    width: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    marginTop: 50,
    color: 'white',
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});
const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};
export default App;

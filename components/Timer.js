import {View, Text} from 'react-native';
import React from 'react';

export default function Timer({hours, minutes, seconds}) {
  return (
    <View
      style={{
        backgroundColor: '#545b93',
        height: 200,
        width: 200,
        borderRadius: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:35,
        marginTop:40,
        borderStyle:'solid',
        borderColor:'#F8EE56',
        borderWidth:1
      }}>
      <Text
        style={{
          color: '#F8EE56',
          fontSize: 25,
        }}>
        {hours < 10  ? '0' + hours : hours} :{' '}
        {minutes < 10  ? '0' + minutes : minutes} :{' '}
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
    </View>
  );
}

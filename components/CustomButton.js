import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({onClick, text}) {
  return (
    <TouchableOpacity
    onPress={onClick}
      style={{
        height: 35,
        width: 110,
        marginTop: 10,
        backgroundColor: '#F8EE56',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        elevation:10,
        borderStyle:'solid',
        borderColor:'white',
        borderWidth:2
      }}>
      <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 18}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

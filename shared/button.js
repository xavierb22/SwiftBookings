import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress }) {
  return (
    
     <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>  
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
      </View>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }, 
    buttonText: {
        fontSize: 20,
        color: '#5384a0',
    }, 
    button: {
        borderWidth: 1,
        height: 40,
        width: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        borderRadius: 10,
        marginBottom: 220,
    },
});
import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Image } 
from 'react-native';
import { globalStyles } from '../styles/global';

export default class Welcome extends Component {
    render() {
        return (
        <View style={globalStyles.container}>
        
            <Image
                source={require('../assets/road-runner.png')}
                style={{ height: 150, width: 200 }}
            />
        
            <View style={styles.header}>
            <Text style={styles.paragraph}>
            Welcome to
            </Text>
            <Text style={styles.paragraph}>
            Swift Tracking
            </Text>
            </View>
            <View style={styles.start}>
                <TouchableHighlight 
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                            <Text style={styles.buttonText}>
                            Start
                            </Text>
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        },
    buttonText: {
        fontSize: 20,
        color: '#5384a0',
    },    
    start: {
        borderWidth: 1,
        height: 40,
        width: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        borderRadius: 10,
    },
});
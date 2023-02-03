import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions} 
from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function Booking ({navigation, route}) {
    const {name, date, time, location, description} = route.params;
    
    return (
        <View style={globalStyles.container}>
            <View style={styles.contentContainer}>
             <Card>
             <Text style={globalStyles.namepart}>{name}</Text>
             <Text style={globalStyles.contentpart}>Date: {date} - Time: {time}</Text>
             <Text style={globalStyles.contentpart}>Location: {location}</Text>
             </Card>
             <Card>
             <Text style={globalStyles.namepart}>Description</Text>
             <Text style={globalStyles.contentpart}>{description}</Text>
             </Card>
             </View>
            <View style={styles.navbarContainer}>
             <TouchableHighlight 
                onPress={() => navigation.navigate('Home')}
             >
                <Text style={styles.buttonText}>
                Back
                </Text>
             </TouchableHighlight>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5384a0',
    },
    contentContainer: {
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbarContainer: {
        height: deviceHeight/10,
        width: deviceWidth,
        backgroundColor: '#5384a0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontSize: deviceHeight/30,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
    },  
});
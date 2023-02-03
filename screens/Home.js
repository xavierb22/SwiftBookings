import React, {useState } from 'react';
import {Text, View, StyleSheet, Dimensions,TouchableOpacity, TouchableHighlight, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import BookingForm from './BookingForm';
import { globalStyles } from '../styles/global';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function Home ({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [Bookings, setBookings] = useState([
    { name: 'Sample booking', date: '12/21/22', time: '8:20 pm',
       location: 'online', description: 'give presentation', key: '1' },
  ]);

  const AddBookings = (booking) => {
    booking.key = Math.random().toString();
     setBookings((currentBookings) => {
       return [booking, ...currentBookings];
    });
    setModalOpen(false);
    };

  const handleDelete = (key) => {
    const newBookings = Bookings.filter(booking => booking.key !== key);
    setBookings(newBookings);
  }

  const showAlert = (key) => 
  {  
     Alert.alert(  
        'Delete Booking',  
        'are you sure you want to delete this booking?',  
        [   
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},  
          {text: 'Delete', onPress: () => handleDelete(key)},  
        ],  
        {cancelable: false}  
    )  
  }  

  return (
      <View style={globalStyles.container}>

        <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
          />
            <BookingForm AddBookings={AddBookings}/>
          </View>
          </TouchableWithoutFeedback>
          </Modal>

        <View style={styles.contentContainer}>
          <FlatList data={Bookings} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Booking', item)}>
              <Card>
              <Text style={globalStyles.namepart}>{ item.name }</Text>
              <Text style={globalStyles.contentpart}>Date: { item.date } - Time: 
              { item.time }</Text>
              <Text style={globalStyles.contentpart}>Location: {item.location}</Text>
              <View style={styles.buttonview}>
              <View style={styles.deletebutton}>
              <TouchableHighlight  onPress={() => showAlert(item.key)}>
                      <Text style={styles.buttonText}>
                      delete
                      </Text>
          </TouchableHighlight>
          </View>
          </View>
              </Card>
            </TouchableOpacity>
          )} />
        </View>
        <View style={styles.navbarContainer}>
          <MaterialIcons 
              name='add' 
              size={24} 
              style={styles.modalToggleOn}
          onPress={() => setModalOpen(true)} 
         />
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
        marginTop: 50,
        height: 5*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbarContainer: {
        height: deviceHeight/15,
        width: deviceWidth,
        backgroundColor: '#5384a0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderColor: 'black',
        marginTop: 20,
    },
    modalToggleOn: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
      },
      modalClose: {
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
      },
      modalContent: {
        flex: 1,
        backgroundColor: '#5384a0',
      },
     deletebutton: {
        height: 40,
        width: 100,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        borderRadius: 10,
        

      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
    buttonview: {
      justifyContent: "center",
      alignItems: "center",
  },    
});          
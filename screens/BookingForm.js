import React from 'react';
import {TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global.js';
import * as yup from 'yup';
import SubmitButton from '../shared/button.js';

const reviewSchema = yup.object({
  name: yup.string()
    .required(),
  date: yup.string()
    .required(),
  time: yup.string()
    .required(),
  location: yup.string(),
  description: yup.string(),
});

export default function BookingForm({AddBookings}){
  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: '', date: '', time: '', location: '', description: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          AddBookings(values);
        }}
      >
        {props => (
          <View>
          <TextInput
             style={globalStyles.input}
            placeholder='give booking a name'
             onChangeText={props.handleChange('name')}
             value={props.values.name}
          />
          <Text style={globalStyles.errorText}>{props.errors.name}</Text>

          <TextInput
             style={globalStyles.input}
             placeholder='date?'
             onChangeText={props.handleChange('date')}
             value={props.values.date}
          />
           <Text style={globalStyles.errorText}>{props.errors.date}</Text>

          <TextInput
            style={globalStyles.input}
            placeholder='time?'
             onChangeText={props.handleChange('time')}
             value={props.values.time}
          />
          <Text style={globalStyles.errorText}>{props.errors.time}</Text>

          <TextInput
             style={globalStyles.locinput}
            placeholder='location?'
            onChangeText={props.handleChange('location')}
             value={props.values.location}
          />

          <TextInput
             style={globalStyles.input}
             multiline minHeight={100}
            placeholder='add a description if you want'
             onChangeText={props.handleChange('description')}
             value={props.values.description}
          />

          <SubmitButton onPress={props.handleSubmit} text='submit' />

         </View>
        )}
      </Formik>
    </View>
  )
}
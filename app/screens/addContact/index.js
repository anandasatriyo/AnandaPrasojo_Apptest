/**
 * Created Date: Monday, 7th February 2022, 8:21:57 pm
 * Author: Ananda Satriyo
 * -----
 * -----
 */
import React, {Fragment, useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import FormLayout from '../formLayout';
import {styles, paperTextInputTheme} from './styles';
import {Text, TextInput} from 'react-native-paper';
import icon from '../../assets/img/contentCopy.png';
import * as RootNavigation from '../../navigation/RootNavigation';
import {rupiah, tanggal} from '../../assets/js/formater';
const AddContact = (props) => {
  const [photo, setPhoto] = useState('');
  const onPressAdd = async (first, last, age, foto) => {
    console.log('MASUK');
    if (first === '') {
      createButtonAlert('Error!', 'Please Input First Name');
    } else if (last === '') {
      createButtonAlert('Error!', 'Please Input Last Name');
    } else if (age === '') {
      createButtonAlert('Error!', 'Please Input Age Corectly');
    } else {
      if (foto === '' || foto === null) {
        setPhoto('N/A');
      } else {
        console.log('kene');
        setPhoto(foto);
      }
      const req = {
        firstName: first,
        lastName: last,
        age: age,
        photo: photo,
      };
      console.log('REQ ' + JSON.stringify(req));
      const response = await fetch(
        'https://simple-contact-crud.herokuapp.com/contact',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(req),
        },
      )
        .then(async (response) => {
          const data = await response.json();
          if (data.error == null) {
            createButtonAlert('Success', data.message);
            RootNavigation.reset();
          } else {
            createButtonAlert(data.error, data.message);
          }
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }
  };
  const createButtonAlert = (Title, Message) =>
    Alert.alert(Title, Message, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <Fragment>
      <View
        style={{
          flex: 1,
        }}>
        <FormLayout
          onPress={(fn, ln, ag, ft) => onPressAdd(fn, ln, ag, ft)}
          first={''}
          last={''}
          ages={''}
          foto={''}
        />
      </View>
    </Fragment>
  );
};

export default AddContact;

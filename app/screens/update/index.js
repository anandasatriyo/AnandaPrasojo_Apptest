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
import {styles} from './styles';
import FormLayout from '../formLayout';
import * as dataAction from '../../store/dataAction';
import {connect} from 'react-redux';
const update = (props) => {
  const onPressAdd = async (first, last, ages, foto) => {
    console.log('MASUK PAK EKO');
    console.log('test : ' + first, last, ages, foto);
    let req = {
      firstName: first,
      lastName: last,
      age: ages,
      photo: foto,
    };
    console.log('REQ ' + JSON.stringify(req));
    const url =
      'https://simple-contact-crud.herokuapp.com/contact/' +
      props.default.selectedData.id;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(req),
    })
      .then(async (response) => {
        const data = await response.json();

        console.log('response : ' + JSON.stringify(data));
        if (data.error == null) {
          createButtonAlert('Success', data.message);
        } else {
          createButtonAlert(data.error, data.message);
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
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
          onPress={onPressAdd}
          first={props.default.selectedData.firstName}
          last={props.default.selectedData.lastName}
          ages={JSON.stringify(props.default.selectedData.age)}
          foto={props.default.selectedData.photo}
        />
      </View>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  const {} = state;
  return {
    ...state,
  };
};

const mapActionToProps = () => ({
  ...dataAction,
});
export default connect(mapStateToProps, mapActionToProps())(update);

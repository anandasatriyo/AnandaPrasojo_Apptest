/**
 * Created Date: Wednesday, 31st August 2022, 7:13:09 am
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
import {styles, paperTextInputTheme} from './styles';
import {connect} from 'react-redux';
import {Text, TextInput} from 'react-native-paper';
import * as dataAction from '../store/dataAction';
const FormLayout = (props) => {
  const [firstName, setFirstName] = useState(props.first);
  const [lastName, setLastName] = useState(props.last);
  const [age, setAge] = useState(props.ages);
  const [photo, setPhoto] = useState(props.foto);
  return (
    <Fragment>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerOutlinedTextInput}>
            <TextInput
              mode="outlined"
              label="First Name"
              editable={true}
              allowFontScaling={false}
              value={firstName}
              style={styles.paperTextInput}
              theme={paperTextInputTheme}
              onChangeText={(text) => setFirstName(text)}
              onEndEditing={(e) => setFirstName(e.nativeEvent.text)}
            />
            <TextInput
              mode="outlined"
              label="Last Name"
              editable={true}
              allowFontScaling={false}
              value={lastName}
              style={styles.paperTextInput}
              theme={paperTextInputTheme}
              onChangeText={(text) => setLastName(text)}
              onEndEditing={(e) => setLastName(e.nativeEvent.text)}
            />
            <TextInput
              mode="outlined"
              label="Age"
              editable={true}
              allowFontScaling={false}
              keyboardType={'number-pad'}
              value={age}
              style={styles.paperTextInput}
              theme={paperTextInputTheme}
              onChangeText={(text) => setAge(text)}
              onEndEditing={(e) => setAge(e.nativeEvent.text)}
            />
            <TextInput
              mode="outlined"
              label="Photo URL"
              editable={true}
              allowFontScaling={false}
              value={photo}
              style={styles.paperTextInput}
              theme={paperTextInputTheme}
              onChangeText={(text) => setPhoto(text)}
              onEndEditing={(e) => setPhoto(e.nativeEvent.text)}
            />
          </View>
          <View style={{paddingHorizontal: '2%'}}>
            <Button
              title="ADD"
              color="#55b584"
              onPress={() => {
                console.log('photo ' + photo);
                props.onPress(firstName, lastName, age, photo);
              }}
            />
          </View>
        </ScrollView>
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
export default connect(mapStateToProps, mapActionToProps())(FormLayout);

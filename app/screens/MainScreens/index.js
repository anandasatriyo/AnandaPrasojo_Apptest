/**
 * Created Date: Wednesday, 31st August 2022, 1:09:41 am
 * Author: Ananda Satriyo
 * -----
 * -----
 */
import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  RefreshControl,
  Button,
  Alert,
} from 'react-native';
import {Text} from 'react-native-paper';
import {connect} from 'react-redux';
import styles from './styles';
import * as RootNavigation from '../../navigation/RootNavigation';
import {rupiah, tanggal} from '../../assets/js/formater';
import * as dataAction from '../../store/dataAction';
const MainScreen = (props) => {
  const [isReady, setIsReady] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [selectContact, setSelectContact] = useState('');
  useEffect(() => {
    fetchData().then((response) => props.setData(Object.values(response.data)));
  }, []);
  async function fetchData() {
    try {
      return fetch(`https://simple-contact-crud.herokuapp.com/contact`).then(
        (response) => response.json(),
      );
    } catch (e) {
      console.error(e);
    }
  }

  const onRefresh = async () => {
    props.resetData();
    setRefreshing(true);
    fetchData().then((response) => {
      console.log(Object.values(response.data)),
        props.setData(Object.values(response.data)),
        setRefreshing(false);
    });
  };
  const handleOnPress = (payload) => {
    setSelectContact(payload.firstName + ' ' + payload.lastName);
    props.setSelectedData(payload);
    setModalVisible(true);
  };
  const onPressUpdate = () => {
    setModalVisible(false);
    console.log(JSON.stringify(props));
    RootNavigation.push('Update', {flag: 2});
  };
  const onPressDelete = () => {
    setModalVisible(false);
    setModalDeleteVisible(true);
  };
  const onPressYes = async () => {
    const url =
      'https://simple-contact-crud.herokuapp.com/contact/' +
      props.default.selectedData.id;
    console.log('test + ' + url);

    const response = await fetch(url, {
      method: 'Delete',
    })
      .then(async (response) => {
        const data = await response.json();
        // if (data.error == null) {
        //   createButtonAlert('Success', data.message, console.log('oke'));
        // } else

        if (data.message === 'contact unavailable') {
          createButtonAlert('Error!', data.message, onRefresh);
        } else {
          createButtonAlert(data.error, data.message, onRefresh);
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
    // fetch('https://simple-contact-crud.herokuapp.com/contact/', {
    //   method: 'DELETE',
    // }).then(() => (element.innerHTML = 'Delete successful'));
    setModalDeleteVisible(false);
  };
  const onPressNo = () => {
    setModalDeleteVisible(false);
  };
  const createButtonAlert = (Title, Message, func) =>
    Alert.alert(Title, Message, [{text: 'OK', onPress: () => func()}]);
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {!isReady ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.container}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalVisible}>
              <View style={styles.modalShadowContainer}>
                <View style={styles.modalContainer}>
                  <Text style={styles.font13Center}>
                    What do you want to do with {selectContact} contact?
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'flex-end',
                      alignContent: 'flex-end',
                      paddingTop: '10%',
                    }}>
                    <Button title="Update" onPress={onPressUpdate} />
                    <Button title="Delete" onPress={onPressDelete} />
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalDeleteVisible}>
              <View style={styles.modalShadowContainer}>
                <View style={styles.modalContainer}>
                  <Text style={styles.font13Center}>
                    are you sure to delete {selectContact} contact?
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'flex-end',
                      alignContent: 'flex-end',
                      paddingTop: '10%',
                    }}>
                    <Button title="Yes" onPress={onPressYes} />
                    <Button title="No" onPress={onPressNo} />
                  </View>
                </View>
              </View>
            </Modal>
            {props.default.filterData.map((e, index2) => (
              <TouchableOpacity
                style={styles.sectionContainer}
                onPress={() => handleOnPress(e)}>
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#55b584',
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}
                />
                <View style={styles.detailContainer}>
                  <View style={styles.columnMargin}>
                    <Text style={styles.font8}>First Name</Text>
                    <Text style={styles.font13}>
                      {e.firstName.toUpperCase()}
                    </Text>
                    <Text style={styles.font8}>Last Name</Text>
                    <Text style={styles.font13}>
                      {e.lastName.toUpperCase()}
                    </Text>
                    <Text style={styles.font8}>Age</Text>
                    <Text style={styles.font13}>{e.age}</Text>
                  </View>
                  <View style={styles.columnMargin}>
                    <Text style={styles.font8}>Photo</Text>
                    <Image
                      style={{
                        width: 70,
                        height: 70,
                      }}
                      source={{
                        uri: e.photo,
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
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

export default connect(mapStateToProps, mapActionToProps())(MainScreen);

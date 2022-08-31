import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  RefreshControl,
} from 'react-native';
import {Text} from 'react-native-paper';
import {connect} from 'react-redux';
import styles from './styles';
import * as RootNavigation from '../../navigation/RootNavigation';
import {rupiah, tanggal} from '../../assets/js/formater';
import * as dataAction from '../../store/dataAction';
import icon from '../../assets/img/chevronDown.png';
import {RadioButton, TextInput} from 'react-native-paper';
const Login = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = React.useState('URUTKAN');
  const [searchQuery, setSearchQuery] = useState('');
  const [isReady, setIsReady] = useState(true);
  const filterPop = [
    'URUTKAN',
    'Nama A-Z',
    'Nama Z-A',
    'Tanggal Terbaru',
    'Tanggal Terlama',
  ];
  const [refreshing, setRefreshing] = React.useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //         let response = await fetch('https://nextar.flip.id/frontend-test');
  //         response = await response.json();
  //         props.setData(Object.values(response));
  //         setIsReady(true);
  //         // setRefreshing(false)
  //     } catch (e){
  //       console.error(e);
  //     }
  //   }
  //   fetchData();
  // }, [])

  const onRefresh = () => {
    //setRefreshing(false);
    // try {
    //   let response = await fetch('https://nextar.flip.id/frontend-test');
    //   response = await response.json();
    //   props.setData(Object.values(response));
    //   setIsReady(true);
    //   setRefreshing(false);
    // } catch (e) {
    //   setRefreshing(false);
    //   console.error(e);
    // }
  };

  const trans = (a) => {
    if (a === 'SUCCESS') {
      return 'Berhasil';
    } else if (a === 'PENDING') {
      return 'Pengecekan';
    } else {
      return a;
    }
  };

  const transColor = (a) => {
    if (a === 'SUCCESS') {
      return '#55b584';
    } else if (a === 'PENDING') {
      return '#f96641';
    } else {
      return a;
    }
  };

  const handleOnPress = (payload) => {
    RootNavigation.push('DetailTrans', {payload: payload});
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  const handleRadio = (value, flag) => {
    if (flag === 0) {
      setValue(value);
      setModalVisible(false);
    } else if (flag === 1) {
      setValue(value);
      props.filterDataByAsc(props.default.filterData);
      setModalVisible(false);
    } else if (flag === 2) {
      setValue(value);
      props.filterDataByDsc(props.default.filterData);
      setModalVisible(false);
    } else if (flag === 3) {
      setValue(value);
      props.filterDataDateByAsc(props.default.filterData);
      setModalVisible(false);
    } else if (flag === 4) {
      setValue(value);
      props.filterDataDateByDsc(props.default.filterData);
      setModalVisible(false);
    }
  };

  const handleSearch = (val) => {
    setSearchQuery(val);
    props.filterData(val.toLowerCase());
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {!isReady ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Cari nama, bank, atau nominal"
                underlineColor="transparent"
                theme={{colors: {text: 'black', primary: 'transparent'}}}
                left={<TextInput.Icon name="magnify" />}
                style={styles.textInputContainer}
                onChangeText={(query) => handleSearch(query)}
                value={searchQuery}
              />
              <TouchableOpacity
                onPress={() => handleModal()}
                style={styles.containerFilter}>
                <Text style={styles.filterText}>{value}</Text>
                <Image source={icon} style={styles.filterIcon} />
              </TouchableOpacity>
            </View>

            {props.default.filterData.map((e, index2) => (
              <TouchableOpacity
                style={styles.sectionContainer}
                onPress={() => handleOnPress(e)}>
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: transColor(e.status),
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}
                />
                <View style={styles.detailContainer}>
                  <View style={styles.columnMargin}>
                    <View style={styles.rowCenter}>
                      <Text style={styles.textBold}>
                        {e.sender_bank.toUpperCase()}
                      </Text>
                      <Image
                        source={require('../../assets/img/arrow-right-thick.png')}
                        style={styles.arrowIcon}
                      />
                      <Text style={styles.textBold}>
                        {e.beneficiary_bank.toUpperCase()}
                      </Text>
                    </View>
                    <Text style={styles.font13}>{e.beneficiary_name}</Text>
                    <View style={styles.rowCenter}>
                      <Text style={styles.font13}>Rp.{rupiah(e.amount)} </Text>
                      <Text style={styles.font8}>{'\u2B24'}</Text>
                      <Text style={styles.font13}>
                        {' '}
                        {tanggal(e.created_at)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.justifyCenter}>
                    <Text
                      style={{
                        borderColor: transColor(e.status),
                        borderRadius: 5,
                        borderWidth: 1,
                        padding: 5,
                        marginRight: 5,
                        fontSize: 13,
                      }}>
                      {trans(e.status)}
                    </Text>
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

export default connect(mapStateToProps, mapActionToProps())(Login);

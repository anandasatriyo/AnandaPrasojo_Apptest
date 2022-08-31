import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalShadowContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    height: '40%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2%',
    borderRadius: 5,
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-between',
  },
  textInputContainer: {
    backgroundColor: '#F7F7F7',
    flex: 2,
    fontSize: 13,
  },
  containerFilter: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  filterText: {
    color: '#eb6d56',
    fontSize: 13,
  },
  filterIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    tintColor: '#eb6d56',
    paddingLeft: '2%',
  },
  font13: {
    fontSize: 13,
  },
  font8: {
    fontSize: 8,
  },
  sectionContainer: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
  },
  detailContainer: {
    flex: 30,
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  columnMargin: {
    flexDirection: 'column',
    margin: 10,
  },
  // rowCenter:{
  //   flexDirection:'row',
  //   alignItems:'center'
  // },
  arrowIcon: {
    resizeMode: 'stretch',
    height: 15,
    width: 20,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});

export default styles;

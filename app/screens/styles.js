/**
 * Created Date: Wednesday, 31st August 2022, 7:21:07 am
 * Author: Ananda Satriyo
 * -----
 * -----
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f9f8',
  },
  sectionContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    marginTop: '1%',
    backgroundColor: '#ffffff',
    paddingVertical: '5%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  paperTextInput: {
    color: 'blue',
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    fontSize: 10,
  },

  textRight: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  icon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    tintColor: '#eb6d56',
    transform: [{scaleX: -1}],
  },
  sectionSpace: {
    elevation: 2,
    justifyContent: 'space-between',
  },
  paddingRight: {
    paddingRight: 5,
  },
  paddingBot4: {
    paddingBottom: '4%',
  },
  tutupText: {
    color: '#eb6d56',
    fontWeight: '500',
  },
  detailContainer: {
    flexShrink: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: '5%',
  },
  detailContainerInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  font600: {
    fontSize: 13,
    fontWeight: '600',
  },
  iconArrow: {
    resizeMode: 'stretch',
    height: 15,
    width: 20,
  },
  containerOutlinedTextInput: {
    flexDirection: 'column',
    borderRadius: 4,
    padding: '2%',
    // height: '6%',
  },
  containerTextInput: {
    borderColor: '#b8c5d0',
    flex: 1,
    borderWidth: 2,
    justifyContent: 'center',
    borderRadius: 4,
  },
});

const paperTextInputTheme = {
  colors: {
    primary: '#b8c5d0',
    background: 'transparent',
    text: '#2a2a2a',
  },
  borderWidth: 1,
};

export {styles, paperTextInputTheme};

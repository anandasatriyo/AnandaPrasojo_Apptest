/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/Entrypoint';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
import {TextInput, Text} from 'react-native-paper';
enableScreens();

AppRegistry.registerComponent(appName, () => App);
if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

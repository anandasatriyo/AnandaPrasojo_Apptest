import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import MainScreens from '../screens/MainScreens';
import addContact from '../screens/addContact';
import update from '../screens/update';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreens}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen
        name="Update"
        component={update}
        options={{title: 'Update Page'}}
      />
    </Stack.Navigator>
  );
}
function AddContact() {
  return (
    <Stack.Navigator initialRouteName="Add Contact" screenOptions={{}}>
      <Stack.Screen
        name="addContact"
        component={addContact}
        options={{title: 'Add Contact Page'}}
      />
      {/* <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/> */}
    </Stack.Navigator>
  );
}
export default function RootStackScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#42f44b',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Contact"
        component={AddContact}
        options={{
          tabBarLabel: 'Add Contact',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

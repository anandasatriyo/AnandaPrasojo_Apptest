import * as React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
//   if (isReadyRef.current && navigationRef.current) {
//     // Perform navigation if the app has mounted
//     navigationRef.current.navigate(name, params);
//   } else {
//     // You can decide what to do if the app hasn't mounted
//     // You can ignore this, or add these actions to a queue you can call later
//   }
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
    navigationRef.current?.dispatch(CommonActions.goBack());
}

export function reset(...args) {
    navigationRef.current?.dispatch(CommonActions.reset(...args));
}
export function nav(...args){
    navigationRef.current?.dispatch(CommonActions.navigate(...args));
}
export function push(...args) {
    navigationRef.current?.dispatch(StackActions.push(...args));
}

export function popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(count=1) {
    navigationRef.current?.dispatch(StackActions.pop(count));
}
export function popCount(count) {
    navigationRef.current?.dispatch(StackActions.pop(count));
}
export function replace(...args) {
    navigationRef.current?.dispatch(StackActions.replace(...args));
}
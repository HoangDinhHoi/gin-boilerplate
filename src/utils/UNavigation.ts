import React from 'react';
import {
  StackActions,
  ParamListBase,
  NavigationContainerRef,
} from '@react-navigation/native';
const isTabRef: React.MutableRefObject<boolean | null> = React.createRef();
const navigationRef = React.createRef<NavigationContainerRef>();
const routeNameRef: React.MutableRefObject<string | null> = React.createRef();
function navigate<T extends ParamListBase>(name: keyof T, params?: T[keyof T]) {
  navigationRef.current?.navigate(name as string, params);
}
function pushToPage<T extends ParamListBase>(
  name: keyof T,
  params?: T[keyof T]
): void {
  navigationRef.current?.dispatch(StackActions.push(name as string, params));
}
function replace<T extends ParamListBase>(name: keyof T, params?: T[keyof T]) {
  navigationRef.current?.dispatch(StackActions.replace(name as string, params));
}
function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}
function pop(number = 1) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}
function goBack() {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
}
function setRoot<T extends ParamListBase>(routeName: keyof T, params = {}) {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name: routeName as string,
        params,
      },
    ],
  });
}

function getCurrentRoute() {
  const currentRoute = navigationRef.current?.getCurrentRoute();
  return currentRoute?.name;
}

export default {
  goBack,
  setRoot,
  isTabRef,
  popToTop,
  pushToPage,
  routeNameRef,
  getCurrentRoute,
  navigate,
  replace,
  pop,
};

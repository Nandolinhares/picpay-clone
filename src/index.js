import React from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import { StatusBar } from 'react-native';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
    </>
  );
}

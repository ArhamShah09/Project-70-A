import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteScreen';
import { createAppContainer } from "react-navigation"; 
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStoryScreen : { screens : ReadStoryScreen },
  WriteStoryScreen : { screens : WriteStoryScreen },
});

const AppContainer = createAppContainer(TabNavigator);
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  fb from "./screens/fb.js"
import insta from './screens/insta.js';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";


export default class App extends React.Component{
  render(){
    return (
    <AppContainer/>
      );
  }
}
const TabNavigator=createBottomTabNavigator({
  fb:{screen:fb},
  insta:{screen:insta}
})
const AppContainer = createAppContainer(TabNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

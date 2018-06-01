import React from 'react';
import { Button, View,AppRegistry, Text,Alert,TextInput,Image,StyleSheet, } from 'react-native';
import { createStackNavigator,DrawerNavigator,TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import SearchScreen from './components/SearchScreen';
import FavouriteScreen from './components/FavouriteScreen';
import Drawernavigation from './components/Drawernavigation';
import CollectionNavigation from './components/CollectionNavigation';
import HomeScreen from './components/HomeScreen';
import Data from './components/Data';


const RootStack = createStackNavigator(
  {
    Home: {screen: HomeScreen,},
    SignUpPage:{screen: SignUpScreen,
      navigationOptions:()=>({
        title:'Sign UpPage',

        headerStyle:{
          backgroundColor: '#ff6347',
        },
        headerTitleStyle:{
         color: '#fff'
         },
      }) },
    LoginPage:{screen: CollectionNavigation,
      navigationOptions:()=>({
        title:'Login Page',
        headerStyle:{
          backgroundColor: '#ff6347',
        },
        headerTitleStyle:{
         color: '#fff'
         }
      }) },
     
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  
  render() {
    return <RootStack />;
  }
}


AppRegistry.registerComponent('UserModule',() => App);



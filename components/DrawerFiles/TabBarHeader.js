import React from 'react';

import {
	View, Text, FlatList,
	Button, Image,StyleSheet,
} from 'react-native';

import {createBottomTabNavigator, }from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Panel from '../../components/BottomTabFiles/Panel';
import Places from '../../components/BottomTabFiles/Places';
import Search from '../../components/BottomTabFiles/Search';
import Profile from '../../components/BottomTabFiles/Profile';
import Home from '../../components/BottomTabFiles/Home';

let RouteConfigs ={
   tabHome:{
    screen:Home,
      navigationOptions:()=>({
      
        tabBarIcon:({tintColor}) =>{
        return(
          <FontAwesome name='home' size={30} color={tintColor} />
          );
          },
      }),
  },
    
   tabPlace:{
    screen:Places,
      navigationOptions:()=>({
    
         tabBarIcon:({tintColor}) =>{
          return(
            <MaterialIcons name='place' size={30} color={tintColor} />
            );
        },
      }),
  },

  tabSearch:{
    screen:Search,
    navigationOptions:()=>({

      tabBarIcon:({tintColor}) =>{
          return(
            <Ionicons name='ios-search' size={30} color={tintColor} />);
         },  
      }),
  },

  tabBookmarkReservation:{
    screen:Panel,
    navigationOptions:()=>({
    
       tabBarIcon:({tintColor}) =>{
          return(
            <Octicons name='bookmark' size={30} color={tintColor} />);
         },
        
      }),
  },

   tabProfile:{
    screen:Profile,
    navigationOptions:()=>({
    
       tabBarIcon:({tintColor}) =>{
          return(
            <Ionicons name='md-contacts' size={30} color={tintColor} />);
         },
        
      }),
  },

}


let BottomTabNavigatorConfig = {
	
      initialRouteName:'tabHome',

     tabBarOptions: {
      padding:20,
        activeTintColor: 'black',
        inactiveTintColor: '#717375',
        showLabel: false,
        showIcon: true,	
        style: {
         backgroundColor: '#e5e6e6',
      },
    },
}

//export default createBottomTabNavigator (RouteConfigs, BottomTabNavigatorConfig);

const TabNavigator = createBottomTabNavigator (RouteConfigs, BottomTabNavigatorConfig);
export default class TabBarHeader extends React.Component {
  
  render() {
    return <TabNavigator />;
  }
}
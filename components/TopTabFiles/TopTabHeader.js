import React from 'react';
import {
	View, Text, FlatList,
	Button, Image,StyleSheet,
} from 'react-native';

import {createMaterialTopTabNavigator ,TabBarTop }from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Reserve from './Reserve';
import Menu from './Menu';
import Review from './Review';

const TabNav = createMaterialTopTabNavigator ({
 
   
    Reserve:{screen: Reserve,

      navigationOptions:()=>({ 
          /*tabBarIcon:({tintColor}) =>{
          return(
            <FontAwesome name='sign-in' size={25} color={tintColor} />);
        },*/
        title:'RESERVE',
      }), },

    Menu:{screen: Menu,
      navigationOptions:()=>({
          /*tabBarIcon:({tintColor}) =>{
          return(
            <MaterialCommunityIcons name='login' size={25} color={tintColor} />);
        },*/

        title:'MENU',
        
      }),
        },
      Review:{screen: Review,
      	navigationOptions:()=>({

      		title:'REVIEWS',
      	}),
      	}  
      },{
   
     swipeEnabled: true,
     animationEnabled :true,
     tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#cccccc',
        inactiveBackgroundColor: '#cccccc',
         
        labelStyle: {
          fontSize: 16,

         },
       indicatorStyle: {
         borderBottomColor: '#ffff33',
         borderBottomWidth: 3,
       },
      showIcon: false,
        pressColor:'#4286f4',
        style: {
         backgroundColor: '#ef800d',
      },
    }
  });

export default class TopTabHeader extends React.Component {
  
  render() {
    return <TabNav />;
  }
}
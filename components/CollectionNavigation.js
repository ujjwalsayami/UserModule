import React from 'react';

import {
	View, Text,
	Button, Image,StyleSheet,
} from 'react-native';
import { createStackNavigator,DrawerNavigator,TabNavigator,TabBarBottom} from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import SearchScreen from '../components/SearchScreen';
import FavouriteScreen from '../components/FavouriteScreen';
import Drawernavigation from '../components/Drawernavigation';


class CollectionNavigation extends React.Component{
	render(){

		return(
			<View style={styles.container}>        
        	
      		  <Text style={styles.textStyle}>
          		Welcome to my World!
       		 </Text>
       	
      </View>
			);
	}

}
const TabNav = TabNavigator(
  {
    CollectionHome: {screen: CollectionNavigation,
      navigationOptions: () =>({
        tabBarIcon:({tintColor}) =>{
          return(
            <Ionicons name='ios-home' size={25} color={tintColor} />);
        }

      })
    },
    
    SignUpPage:{screen: SignUpScreen,
      navigationOptions:()=>({ 
          tabBarIcon:({tintColor}) =>{
          return(
            <FontAwesome name='sign-in' size={25} color={tintColor} />);
        },
        title:'Sign UpPage',
       
        headerStyle:{
          backgroundColor: '#efefef',
        },
        headerTitleStyle:{
         color: '#fff'
         },
      }) },

    LoginPage:{screen: LoginScreen,
      navigationOptions:()=>({
          tabBarIcon:({tintColor}) =>{
          return(
            <MaterialCommunityIcons name='login' size={25} color={tintColor} />);
        },

        title:'Login Page',
        headerStyle:{
          backgroundColor: '#ff6347',
        },
        headerTitleStyle:{
         color: '#fff'
         }
      }) }, },{ 
      tabBarOptions: {
        showIcon: true,
       activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style:{
        backgroundColor: '#efefef',   
      },}
      }
      );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  topLogo: {
    justifyContent: 'center',
    margin: 10,
    height: 25,
    width: 25,
    borderRadius: 0,
  },

  textStyle: {
    color: '#111111',
    textAlign:'center',
    margin: 30,
    marginTop: 20,
    fontSize: 20,
  }
});
export default DrawerNavigator({
	Tabs: {
		screen: TabNav,
	}

});
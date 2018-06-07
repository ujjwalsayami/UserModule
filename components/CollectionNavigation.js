import React from 'react';

import {
	View, Text,
	Button, Image,StyleSheet,
} from 'react-native';
import { createDrawerNavigator ,createMaterialTopTabNavigator ,TabBarTop }from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ContactScreen from '../components/DrawerFiles/ContactScreen';
import ProfileScreen from '../components/DrawerFiles/ProfileScreen';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import Drawernavigation from '../components/Drawernavigation';
import SearchScreen from '../components/SearchScreen';
import FavouriteScreen from '../components/FavouriteScreen';

class CollectionNavigation extends React.Component{
	   navigationOptions:()=>({
        title:'Collection Nav',
        headerStyle:{
          backgroundColor: '#ff6347',
        },
        headerTitleStyle:{
         color: '#fff'
         },
            
      });
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
const TabNav = createMaterialTopTabNavigator (
  {
    CollectionHome: {screen: CollectionNavigation,
      navigationOptions: () =>({
        tabBarIcon:({tintColor}) =>{
          return(
            <Ionicons name='ios-home' size={25} color={tintColor} />);
        }

      }), 
    },
    
    SignUpPage:{screen: SignUpScreen,
      navigationOptions:()=>({ 
          tabBarIcon:({tintColor}) =>{
          return(
            <FontAwesome name='sign-in' size={25} color={tintColor} />);
        },
        title:'Sign UpPage',
      }), },

    LoginPage:{screen: LoginScreen,
      navigationOptions:()=>({
          tabBarIcon:({tintColor}) =>{
          return(
            <MaterialCommunityIcons name='login' size={25} color={tintColor} />);
        },

        title:'Login Page',
        
      }),
        },
      },{
       
        
      swipeEnabled: true,
      animationEnabled :true,
        tabBarOptions: {
          activeTintColor: '#ff6347',
         inactiveTintColor: '#cccccc',
          inactiveBackgroundColor: '#cccccc',
          activeBackgroundColor: '#ff6347',
          labelStyle: {
          fontSize: 12,
         },
       indicatorStyle: {
         borderBottomColor: '#ff6347',
         borderBottomWidth: 3,
       },
         showIcon: true,
        pressColor:'#4286f4',
        style: {
         backgroundColor: '#ffffff',
      },
    }
  });

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


export default createDrawerNavigator ({
	TabNav: {
		screen: TabNav,
	},
  Drawernavigation:{
    screen:Drawernavigation,
     
     navigationOptions:()=>({

      //drawerWidth :500,
      padding: 50,

          drawerIcon:({tintColor}) =>{
          return(
            <MaterialCommunityIcons name='login' size={35} color={tintColor} />);
        },

        drawerLabel:'Login Page',
      
        
      }),

  },

  Search:{
    screen:SearchScreen,
    navigationOptions:()=>({

     // drawerWidth :500,
          drawerIcon:({tintColor}) =>{
          return(
            <Ionicons name='ios-search' size={35} color={tintColor} />);
        },

        drawerLabel:'Search',
        
      }),
  },

  ContactUs:{
    screen:ContactScreen,
     navigationOptions:()=>({

      //drawerWidth :500,
          drawerIcon:({tintColor}) =>{
          return(
            <MaterialIcons name='contact-phone' size={35} color={tintColor} />);
        },

        drawerLabel:'Contact',
        
      }),

  },
  Profile :{
    screen:ProfileScreen,
     navigationOptions:()=>({
        drawerLabel:'Profile',

      drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../components/images/homebtnimg.png')}
        style={{width:26, height:26, backgroundColor: '#ffffff'}}
      />
    )
  }),

  }
  

});
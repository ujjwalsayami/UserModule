import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';

import SearchScreen from '../components/SearchScreen';
import FavouriteScreen from '../components/FavouriteScreen';
//import Drawernavigation from '../components/Drawernavigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator,} from 'react-navigation';

class LoginScreen extends React.Component {
 
constructor(props) {
   super(props);
 
 }
 
  render() {
    return (
     <View style={styles.container}>        
        
        <Text style={styles.textStyle}>
           Login Successfull!
        </Text>

        <Text style={styles.textStyle}>
          Welcome : 
        </Text>
        <Text>
          Your PhonePassword is : 
        </Text>
         
        </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  signup: {
    flex: 1,
    flexDirection: 'row', 
  },
  topLogo: {
    justifyContent: 'center',
    margin: 10,
    height: 25,
    width: 25,
    borderRadius: 0,
  },
  buttonContainer: {
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  welcome: {
    color: '#111111',
    textAlign:'center',
  },
  textStyle: {
    color: '#111111',
    textAlign:'center',
    margin: 30,
    marginTop: 20,
    fontSize: 20,
  }
});

export default createBottomTabNavigator ({
  Home: {screen: LoginScreen,},
  Search: {screen: SearchScreen,},
  Favourite:{screen: FavouriteScreen,},

  },
{
  navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        }else if( routeName === 'Favourite'){
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),  

  tabBarOptions: {

      showIcon: true,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
     labelStyle: {
       fontSize: 14,
       padding:0,
    },
    },
    
   },
  );


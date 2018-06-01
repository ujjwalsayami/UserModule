
import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';
import SearchScreen from '../components/SearchScreen';
import FavouriteScreen from '../components/FavouriteScreen';
//import Drawernavigation from '../components/Drawernavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNavigator,createStackNavigator,
         TabBarBottom,DrawerNavigator} from 'react-navigation';

class Drawernavigation extends React.Component {
  static navigationOptions ={
    drawerLabel:'Logins',
    drawerIcon: ({tintColor}) =>(
      <Image style={styles.topLogo}
        source={require('../components/images/homebtnimg.png')}
      />
      ),
    tabBarLabel:'Home',
    inactiveBackgroundColor:'#595959',
    activeBackgroundColor: '#FF4500',
    style:{

      backgroundColor: '#FF4500',   
    },
   
};
 
  render() {
    return (
     <View style={styles.container}>        
        <Text style={styles.textStyle}>
           Drawer Successfull!
        </Text>

         <Button title="Open Drawer"
              onPress={()=>this.props.navigation.navigate('DrawerNav')
              }/>
        
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


export default DrawerNavigator ({
  //Home: {screen: LoginScreen,},
  DrawerNav:{screen: Drawernavigation,},
  Search: {screen: SearchScreen,},
  Favourite:{screen: FavouriteScreen,},
  },

  );
  
  

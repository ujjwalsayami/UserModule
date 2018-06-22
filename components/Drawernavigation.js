import React from 'react';
import{
    StyleSheet,TextInput,BackHandler,
    Text,Image,Button,Alert,View,

} from 'react-native';
import SearchScreen from '../components/SearchScreen';
import FavouriteScreen from '../components/FavouriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from 'react-navigation';

class Drawernavigation extends React.Component {
 
 render() {
 
    return (
     <View style={styles.container}>        
        <Text style={styles.textStyle}>
           This is exit
        </Text>

         <Button title="Open Drawer"
              onPress={()=>this.props.navigation.toggleDrawer() }
          />
          <Button title="Exit"
            onPress={()=>{
              return BackHandler.exitApp();
            }}/>
        
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


export default createDrawerNavigator ({
  DrawerNav:{screen: Drawernavigation,},

});
  
  

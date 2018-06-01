import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';
//import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';

export default class SearchScreen extends React.Component {
  static navigationOptions={
    tabBarLabel:'Search',
    showLabel: true,
       };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  signup: {
    flex: 1,
    flexDirection: 'row', 
  },
  topLogo: {
    justifyContent: 'center',
    margin: 10,
    height: 120,
    width: 120,
    borderRadius: 50,
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

/*export default createBottomTabNavigator({
  Settings: SettingsScreen,
});*/
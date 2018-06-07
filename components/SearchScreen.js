import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';


export default class SearchScreen extends React.Component {
  static navigationOptions={
    tabBarLabel:'Search',
    showLabel: true,
       };

  render() {
    return (
      <View style={[styles.container,styles.buttonContainer]}>
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
   
  },
 
  buttonContainer: {
    marginTop: 20,
  },
});
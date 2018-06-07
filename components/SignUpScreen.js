import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';

import { createStackNavigator } from 'react-navigation'; 


export default class SignUpScreen extends React.Component {
 
  static navigationOptions = {
    title: 'Sign Up',
    
 };
  render() {
    return (
     <View style={{ flex: 1, alignItems: 'center',  }}>
       <Image style={styles.restroLogo} 
        source={require('../components/images/ic_restro_logo_full.png')}/>
       <Text >
           Sign Up for Free!
        </Text>
        <TextInput placeholder="Name here(Id is generally the phone number)"
          style={styles.textStyle}  editable = {true} />

        <TextInput placeholder="Password"
          style={styles.textStyle} />
      
        <TextInput placeholder="Confirm Password"
          style={styles.textStyle} />
          
        <Button title="SignUp" style={{marginTop:20}} onPress={()=>this.props.navigation.goBack()}/>
      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  
  restroLogo: {
    justifyContent: 'center',
    margin: 5,
    height: 100,
    width: 230,
    borderRadius: 5,
  },

  textStyle: {
    color: '#111111',
    textAlign:'center',
    width:200,
    borderRadius: 0,
    borderBottomColor: '#000000',
    borderTopColor: '#000000',
    borderColor: '#111111',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 20,
    marginTop:20,
  }
});
import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';

import t from 'tcomb-form-native';
import { createStackNavigator } from 'react-navigation'; 

const Form = t.form.Form;

t.Number.getValidationErrorMessage = function (value, path, context) {
  if(!value)
    return 'empty fields';
  else if(!Number.isInteger(value))
    return 'invalid characters';
  if(!value)
    return 'empty field';
  else if(!String.isString(value))
    return 'invalid characters';
};

const User = t.struct({
  name: t.String,              // a required string
  password: t.Number,  // an optional string
  confirmPassword: t.Number,               // a required number
  terms: t.Boolean        // a boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom :10
    },
  },
  controlLabel:{
    normal:{
      color: 'blue',
      fontSize: 20,
      marginBottom: 7,
      fontWeight: '600',  
    },
    //the styles applied when a validation error occurs
    error:{
      color: 'red',
      fontSize: 20,
      marginBottom: 7,
      fontWeight: '600' 
    }
  }
};


const options = {
  order: ['name','password','confirmPassword','terms'],
  fields:{
    name:{
      placeholder: 'Id/Phone Number',
      error:'Id is essential to login',
      help:'Id is generally the phone number.',
    },
    password:{
      placeholder:'Enter password',
    },
    confirmPassword:{
      placeholder:'Re-type password again',
    },
    terms:{
      label:'You agree to our terms and condition.',
    },
    stylesheet: formStyles,
}
};

export default class SignUpScreen extends React.Component {
  handleSubmit = () =>{
    const value = this._form.getValue();

  };
  static navigationOptions = {
    title: 'Sign Up',
    
 };
  render() {
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image style={styles.restroLogo} 
        source={require('../components/images/ic_restro_logo_full.png')}/>
       <Text style={styles.textStyle}>
           Sign Up for Free!
        </Text>
       <Form
         ref={ c => this._form = c}
          type={User}
           options={options}
        />
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
    height: 110,
    width: 110,
    borderRadius: 50,
  },
  restroLogo: {
    justifyContent: 'center',
    margin: 5,
    height: 100,
    width: 230,
    borderRadius: 5,
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
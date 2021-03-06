import React from 'react';
import { Button, View,AppRegistry, Text,Alert,TextInput,Image,StyleSheet, } from 'react-native';
import { createStackNavigator,DrawerNavigator,TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import SearchScreen from '../components/SearchScreen';
import FavouriteScreen from '../components/FavouriteScreen';
import Drawernavigation from '../components/Drawernavigation';
import CollectionNavigation from '../components/CollectionNavigation';
import Data from '../components/Data';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle:{
      backgroundColor: '#ff6347',
    },
    headerTitleStyle:{
      color: '#fff'
    }
 };

 constructor(props) {
   super(props);
  this.state ={
    name: '',
    nameValidate: true,
    password: '',
  }
 }

 onMeet(){
  Alert.alert("Hello Ujjwal","This is just test method");
 }


 handleChangeText = (typedText) =>{
    this.setState({text: typedText});
    
 }
validate(text, type){
  alph=/^[a-zA-Z]+$/
  num = /^[0-9]+$/
  if(type == 'username'){
      if(num.test(text)){
        this.setState({nameValidate:true,})
      }else{
         this.setState({nameValidate:false,})
      }
  }
  if(type == 'password'){
    if(alph.test(text)){
       this.setState({paswordValidate:true,})
     }else{
        this.setState({passwordValidate:false,})
     }
  }
}
  render() {
    var userArray={
    0:{
      name:"X",
      age:24,
      contact:[9854727223,984356565]
    },
    1:{
      name:"Y",
      age:42,
      contact:[9832272745,9854727223]
    },};

    var user ={
      name:"AnnaHathaway",
      contact:[989545334,983345345],
    };


    return (
  
        <View style={styles.container}>
          
          <Image style={styles.topLogo} source={require('../components/images/restro_logo_new.png')} />
        
          <Text style={styles.welcome}>
           User Module!
          </Text>

          <View style={styles.viewContainer}>
             <Data name={"ujjwal"} initialAge={24} user={user} userArray={userArray}
                meet={this.onMeet}
             />
           </View>  

          <TextInput
            style={[styles.nameStyle, !this.state.nameValidate ? styles.error:null]}
            placeholder="Phone number"           
            onChangeText={(text) => this.validate(text,'username')} 
          />

        <TextInput
           style={styles.passwordStyle}
            placeholder="Password" onChangeText={(text) => this.handleChangeText}
           />
       

        <Button onPress={() =>this.props.navigation.navigate('LoginPage',{phoneNumber: this.state.text,
            passwordText: this.state.text,
            })}
        
            title="Login" style={styles.buttonContainer} />
        
        
      <View style={styles.signup}>
        <Text style={styles.textStyle}>
          Don't have an account, Sign Up here! 
           </Text>
       <View style={styles.buttonContainer}>
           <Button
              onPress={() => this.props.navigation.navigate('SignUpPage')}
              title="Sign Up"
              color="#841584"
              />
             
              
        </View>

      </View>

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
  restroLogo: {
    justifyContent: 'center',
    margin: 10,
    height: 120,
    width: 240,
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
    fontSize:25,
  },
  textStyle: {
    color: '#111111',
    textAlign:'center',
    margin: 30,
    marginTop: 20,
    fontSize: 20,
  },
  nameStyle:{height: 60,
   width: 200,padding: 10, 
   fontSize: 16, marginTop: 100,},
  
   passwordStyle:{
    height: 60,
   width: 200,padding: 10, 
   fontSize: 16, marginTop: 10,
   },
  error:{
    borderWidth: 5,
    borderBottomColor: 'red',
    borderLeftColor: '#F5FCFF',
    borderRightColor: '#F5FCFF',
    borderTopColor: '#F5FCFF',
  },
  viewContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',    
  },
});

import React from 'react';
import{
    StyleSheet,TextInput,ScrollView,
    Text,Image,Button,Alert,View,Picker

} from 'react-native';

import { createStackNavigator } from 'react-navigation'; 


export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pickerSelection:'Gender*',
      preferencePicker:'Preference*',
    };
  }


   render() {
    return (
      <ScrollView>
       <View style={{flex:1 , }}>
        <View style={{ alignSelf: 'center',width: '50%', marginTop: 10, marginBottom:10,}}>
         <Image style={styles.restroLogo} 
          source={require('../components/images/ic_restro_logo_full.png')}/>
           <Text style={styles.textStyle}>
               Sign Up for Free!
            </Text>

            <TextInput placeholder="First Name*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}  editable = {true} />

            <TextInput placeholder="Last Name*"
             underlineColorAndroid={'transparent'}
              style={styles.textInputStyle} />
          
            <View style={styles.pickerView}>
             
             <Picker
               selectedValue={this.state.pickerSelection}
               style={{ height: 50, width: '100%',marginTop:20, }}
               onValueChange={(itemValue, itemIndex) => this.setState({pickerSelection: itemValue})}>
                <Picker.Item label="Gender" value="Gender" />
               <Picker.Item label="Male" value="Male" />
               <Picker.Item label="Female" value="Female" />
              </Picker>
          </View>
              
            <TextInput placeholder="Address*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}  editable = {true} />

            <TextInput placeholder="Email*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle} />
          
            <TextInput placeholder="Mobile No.*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle} />

            <TextInput placeholder="Gender*"
              underlineColorAndroid={'transparent'}
             style={styles.textInputStyle} />

            <TextInput placeholder="Username*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle} />
            
            <TextInput placeholder="Password*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle} />
            
            <TextInput placeholder="Re-enter Password*"
             underlineColorAndroid={'transparent'}
              style={styles.textInputStyle} />
           
           
              <Picker
                 selectedValue={this.state.preferencePicker}
                 style={{ height: 50, width: '100%' ,marginTop:20, }}
                 onValueChange={(itemValue, itemIndex) => this.setState({preferencePicker: itemValue})}
                 >
                 <Picker.Item label="Preference" color="blue" value="Preference" />
                 <Picker.Item label="Momo" value="Momo" />
                 <Picker.Item label="Pizza" value="Pizza" />
                 <Picker.Item label="Burger" value="Burger" />
                </Picker>
            

            <View style={{flexDirection: 'row', marginTop:10, alignSelf: 'flex-end', marginRight: 10}}>
              <View style={styles.buttonContainer}>
              <Button title="Cancel"  color="#e46c0b" onPress={()=>this.props.navigation.goBack()}/>
              </View>
              <View style={styles.buttonContainer}>
              <Button title="SignUp" color="#00af50" onPress={()=>this.props.navigation.goBack()}/>
              
              </View>
            </View>
        </View>
        </View>
      </ScrollView>
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
    color: 'black',
    textAlign:'center',
    width:200,
    fontSize: 20,
    marginTop:20,
  },

   textInputStyle:{
      color:'black',
      width:'100%',
      fontSize: 20,
      marginTop:20,
      borderColor: '#f7bf86',
      borderBottomWidth: 1,
   },
   buttonContainer:{
    position: 'relative', 
    marginLeft: '3%',
    marginBottom: '4%',
   },
   pickerText:{
    width:'48%',marginTop:20,
    fontSize: 20, color: 'black',
    borderBottomColor: '#8c8c8c', 
    borderBottomWidth: 1,marginLeft: 10
  },
   pickerView:{
      flexDirection: 'row',
      width:'100%',
      borderBottomColor: '#F7BF86', 
    }
 
});
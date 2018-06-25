import React from 'react';
import{
    StyleSheet,TextInput,ScrollView,
    Text,Image,Button,Alert,View,Picker,
    TouchableHighlight,DatePickerAndroid
} from 'react-native';

import { createStackNavigator } from 'react-navigation'; 
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pickerSelection:'Gender*',
      preferencePicker:'Preference*',
      selectedDate:'',
    };
  }

  renderDatePickerAndroid = ()=>{
   try {
      const {action, year, month, day} = DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(),
        mode:'default'
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        const d = new Date()
        const date = d.toDateString();
          this.setState({
                      selectedDate: date
                    });
           console.log('Selected date is', date);
        }
      }

     catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }

  }

   render() {

    return (
      <ScrollView>
       <View style={{flex:1 , }}>
        <View style={{ alignSelf: 'center',width: '50%', marginTop: 10, marginBottom:10,}}>
         <Image style={styles.restroLogo} 
          source={require('../components/images/ic_restro_logo_full.png')}/>
           <Text style={{color: 'black',
              fontSize: 20,
               marginTop:20,}}>
               Sign Up for Free!
            </Text>

            <TextInput placeholder="First Name*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}  editable = {true} 
              onEndEditing={()=>this.refs.lastName.focus()}
                />

            <TextInput placeholder="Last Name*"
             underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}
              ref={"lastName"}
              />
          
            <View style={{flexDirection: 'row', }}>
              <Text style={styles.textStyle} >
                {this.state.selectedDate}
              </Text>
              <TouchableHighlight onPress={this.renderDatePickerAndroid}>
                <SimpleLineIcons name="options" 
                  size={25} style={styles.iconStyle} 
                  />
              </TouchableHighlight>
            </View>
              
            <TextInput placeholder="Address*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}  
              onEndEditing={()=>this.refs.email.focus()}
               />

            <TextInput placeholder="Email*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}
              keyboardType='email-address'
              ref={"email"}
              onEndEditing={()=> this.refs.mobile.focus()} />
          
            <TextInput placeholder="Mobile No.*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}
              ref={"mobile"} />

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

            <TextInput placeholder="Username*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle} 
              onEndEditing={()=>this.refs.password.focus()}
              />
            
            <TextInput placeholder="Password*"
              underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}
              secureTextEntry 
              ref={"password"}
              onEndEditing={()=>this.refs.repassword.focus()}
              />
            
            <TextInput placeholder="Re-enter Password*"
             underlineColorAndroid={'transparent'}
              style={styles.textInputStyle}
              secureTextEntry 
              ref={"repassword"}/>
           
           
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
    width:'92%',
    fontSize: 20,
     marginTop:20,
    borderBottomColor: '#f7bf86',
    borderBottomWidth: 1
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
    },
    iconStyle:{
      padding: 10 ,
      backgroundColor: '#cccccc'
    }
 
});
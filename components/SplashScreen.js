import React from 'react';
import{
    StyleSheet,TextInput,ScrollView,
    Text,Image,Button,Alert,View,Picker,
    TouchableHighlight,StatusBar
} from 'react-native';



export default class SplashScreen extends React.Component {
  
   render() {

    return (
 
       <View style={styles.Container}>
         <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
         />
         <View style={{flexDirection: 'column',
          borderColor: 'red', borderWidth: 2,
          justifyContent: 'center' ,alignSelf: 'center', }}>
            <Text style={{fontSize: 35, color: 'white',fontWeight:'bold', textAlign:  'center' }}> 
              RestroReserve
            </Text>
            <Text style={styles.textContainer}>
             We Reserve seat you a seat with us!
            </Text>
            <Text style={styles.textContainer}>
              Loading...
            </Text>

          </View>
        </View>
 
    );
  }
}

const styles = StyleSheet.create({
  
  Container: {
    justifyContent: 'center',
    backgroundColor: '#ef800d',
    flex: 1
  },
  textContainer:{
    fontSize: 20,
    fontWeight:'bold',
    color:'white',
    textAlign:  'center' 
  }

});
import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';
import HeaderComponent from './HeaderComponent';

export default class ContactScreen extends React.Component {
  static navigationOptions ={
    drawerLabel:'About us',
    drawerIcon: ({tintColor}) =>(
      <Image style={styles.topLogo}
        source={require('../../components/images/homebtnimg.png')}
      />
      ),
    tabBarLabel:'Abput us',
    inactiveBackgroundColor:'#595959',
    activeBackgroundColor: '#FF4500',
    style:{

      backgroundColor: '#FF4500',   
    },
   
};
 
  render() {
    return (
      <View style={{flex:1}}>
       <HeaderComponent {...this.props} />
        <View style={styles.container}>   

          <Text style={styles.textStyle}>
             About us screen Successfull!
          </Text>
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



  

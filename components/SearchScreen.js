import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';
import HeaderComponent from '../components/DrawerFiles/HeaderComponent';


export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      searchValue:'',
    };
  }

updateSearch =(value)=>{
  this.setState=({
      searchValue:value
    });
}
  static navigationOptions={
    tabBarLabel:'Search',
    showLabel: true,
       };

  render() {
    return (
      <View style={{flex:1}}>
       <HeaderComponent {...this.props}  />


        <View style={[styles.container,styles.buttonContainer]}>

          <Text>Search screen!</Text>
          <TextInput placeholder="Search here..." 
            underlineColorAndroid={'transparent'}
           style={styles.textInput} 
           onChangeText={(searchValue)=>this.setState({searchValue})}
           value={this.state.searchValue}/>

           <Text  style={styles.textInput} >{this.state.searchValue} </Text>
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
   
  },
 
  buttonContainer: {
    marginTop: 20,
  },
  textInput:{
    width:'100%', borderColor: 'gray', borderWidth: 1, borderRadius:8,

  }
});
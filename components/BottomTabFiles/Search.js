import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';
import { SearchBar } from 'react-native-elements';

import HeaderComponent from '../../components/DrawerFiles/HeaderComponent';


export default class Search extends React.Component {
  static navigationOptions={
    tabBarLabel:'Search',
    showLabel: true,
       };

  constructor(props) {
    super(props);
  
    this.state = {
      searchText:'',
      clearText:'',
    };
  }

  searchTextHandler = ()=>{
    this.setState({
      searchText:this.state.searchText
    });
  };

  onClearHandler = ()=>{
    this.setState({
      clearText:this.state.clearText
    });
  };

  render() {
    return (
      <View style={{flex:1}}>
        <SearchBar
          lightTheme
          showLoading
          clearIcon={{ color: 'gray' }}
          searchIcon={false} 
          onChangeText={this.searchTextHandler}
          onClear={this.onClearHandler}
          placeholder='Search Here...'
          style={{color: 'black', fontSize: 20, fontWeight:'bold'}} />


        <View style={[styles.container,styles.buttonContainer]}>

          <Text>Search screen!</Text>
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
});
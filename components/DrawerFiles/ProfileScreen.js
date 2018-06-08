/*
import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions ={
    drawerLabel:'Logins',
    drawerIcon: ({tintColor}) =>(
      <Image style={styles.topLogo}
        source={require('../../components/images/homebtnimg.png')}
      />
      ),
    tabBarLabel:'Home',
    inactiveBackgroundColor:'#595959',
    activeBackgroundColor: '#FF4500',
    style:{

      backgroundColor: '#FF4500',   
    },
   
};
 
  render() {
    return (
     <View style={styles.container}>        
        <Text style={styles.textStyle}>
           Profile screen Successfull!
        </Text>

        
        
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
});*/


import React from 'react';
import { FlatList, Image,ActivityIndicator,ViewPagerAndroid, StyleSheet,Text, View  } from 'react-native';
import CollectionNavigation from '../../components/CollectionNavigation';

export default class ProfileScreen extends React.Component {

  state ={
    data: [],
  }

  componentWillMount(){
    this.fetchData();
  }

  fetchData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const json = await response.json();
    this.setState({data: json});
  }



  render(){

    return(
      <View style={{flex: 1,}}>
        <ViewPagerAndroid
           style={styles.viewPager}
            initialPage={0}
            peekEnabled={true}>
            <View style={styles.pageStyle} key="1">
              <Image style={styles.viewPageImageSize}
                source={require('../../components/images/mkbhd.jpg')} />
              <Text style={styles.textStyle}>  Ujjwal Manandhar</Text>
            </View>
            <View style={styles.pageStyle} key="2">
              <Image style={styles.viewPageImageSize}
                source={require('../../components/images/mkbhd1.jpg')} />
            </View>
    </ViewPagerAndroid>

        <FlatList
          data={this.state.data}
          renderItem={({item}) =>  
          <View style= {[styles.container,styles.viewLine]}>
           <Image style={styles.imageSize} source={{uri:item.thumbnailUrl}}  onPress={()=>this.props.navigation.navigate('LoginPage')}/>

            <Text style={styles.TitleContainer}>Id: {item.id}      Title: {item.title}</Text>
           
         </View> }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
 
   );
  }
}

const styles=StyleSheet.create({
  container:{
          flex: 1, flexDirection: 'row',
           
          },
  TitleContainer:{
        fontSize: 20, justifyContent: 'flex-start' ,
           marginLeft: 20,margin:20,
           marginRight: 20,textDecorationStyle: 'solid',  
           fontFamily: 'lucida grande', color: '#1a0000'
  },
   bodyStyle:{
          fontSize: 20, justifyContent: 'center',
            marginBottom: 20,alignSelf: 'center' , 
            fontWeight: 'normal',  
            fontFamily: 'sans-serif', color: '#1a0000'
            },
   imageSize:{
            height: 100,
            width: 100, margin:5,
            borderRadius: 2,
            marginLeft:10,
            },
    viewPager: {
            flex: 1,
            },
    pageStyle: {
            alignItems: 'center',
            
            },
    viewPageImageSize:{
      width:'100%',
      height:'100%',
    },
    viewLine:{
          borderBottomColor: 'gray',
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: '100%',
    },
    textStyle:{
       color: 'red',
       fontSize: 20,
    }

});


  

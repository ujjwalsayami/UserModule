import React from 'react';
import {
	FlatList, Image,ActivityIndicator,
        ViewPagerAndroid,Alert, StyleSheet,Text, View 

} from 'react-native';
import HeaderComponent from '../../components/DrawerFiles/HeaderComponent';
import CollectionNavigation from '../../components/CollectionNavigation';
import TopTabHeader from '../../components/TopTabFiles/TopTabHeader';


export default class Home extends React.Component{


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

        
         <View style={{flex: 1, position: 'relative' }}> 
			      <TopTabHeader {...this.props}/>
			   </View>
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
            width: 100, 
            margin:5,
            borderRadius: 2,
            marginLeft:10,
            },
    viewPager: {
            flex: 1,
            height: 50,
            },
    pageStyle: {
            alignItems: 'center',
            },
    viewPageImageSize:{
      width:'100%',
      height:'100%',
      resizeMode: Image.resizeMode.center,
    },
    viewLine:{
          borderBottomColor: 'gray',
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: '100%',
    },
    textStyle:{
       color: 'red',
       fontSize: 20,
    },

});


  



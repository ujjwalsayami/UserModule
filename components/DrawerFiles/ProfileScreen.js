import React from 'react';
import { FlatList, Image,ActivityIndicator,
        ViewPagerAndroid,Alert, StyleSheet,Text, View 
   } from 'react-native';
import CollectionNavigation from '../../components/CollectionNavigation';

import HeaderComponent from '../../components/DrawerFiles/HeaderComponent';
import TabBarHeader from '../../components/DrawerFiles/TabBarHeader';


export default class ProfileScreen extends React.Component {

  static navigationOptions = {
      title:'Profile Page',
      headerStyle:{
        backgroundColor: '#ff6347'
      }

  };

  state ={
    data: [],
     activeRowKey: null,
      deletedRowKey:null,
  }
   refreshFlatList=(deletedId) =>{
    this.setState((prevState) =>{
      return{deletedRowKey: deletedId};
    });
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
    var itemDelete = {...this.state.data};
    const swipeSettings = {
      autoClose: true,
      onClose:(secId, rowId, direction) =>{
        this.setState({activeRowKey: null});
      },
      onOpen:(secId, rowId, direction) =>{
          this.setState({activeRowKey: this.props.item.id});
      },
      right:[
        {
            onPress:() =>{
              const deletingRow = this.state.activeRowKey;
              Alert.alert(
                'Alert',
                'Are you sure you want to delete ?',
                [
                {text: 'No', onPress: () =>console.log('canel pressed'), style:'cancel'},
                {text:'Yes', onPress: ()=>{
                  this.state.data.splice(this.props.index, 1);
                  //Refresh FlatList
                  //this.props.parentFlatList.refreshFlatList(deletingRow);

                }},
               ],
               {cancelable: true}

                );
            },
            text: 'Delete', type:'delete'  
            },
            ],
             rowId: this.props.index,
             sectionId:1,
    };

    return(
    
      <View style={{flex: 1,}}>
         <HeaderComponent {...this.props}  />
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

            <Image style={styles.imageSize} source={{uri:item.thumbnailUrl}} />
            <View style={{flex:1, flexDirection:'column' }}>
              <Text style={styles.TitleContainer}> Id: {item.id}      AlbumId: {item.albumId} </Text>
              <Text style={{fontSize: 20,fontFamily: 'lucida grande', color: '#1a0000', marginLeft: 20,}}> 
                Title: {item.title}
              </Text>

            </View>
           </View> 
         }
         
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


  

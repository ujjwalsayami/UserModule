import React from 'react';
import {
    FlatList, Image,ScrollView,StyleSheet,Text, View 

} from 'react-native';

import BookmarkReservation from '../../components/BottomTabFiles/BookmarkReservation';


export default class Panel extends React.Component{


    render(){
        return(
            <ScrollView style={styles.container}>

                <BookmarkReservation  title="Breakfast">
                  <View style={{margin: 10}}>
                     <View style={[styles.menuContainer, styles.itemContainer ]}>
                        <Image
                              style={{width:'20%', height:'40%', padding: '8%', }}
                              source={require('../../components/images/cokeicon.png')} />
                               
                           <View style={{flexDirection:'column',width: '80%',height:'40%',
                                }}>
                             <View style={{flexDirection: 'row',}}>
                               <Text style={styles.textContainer}>
                                     Coke
                                  </Text>
                                 
                                </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textStyle}>
                                   (Android-only) Sets the elevation of a view, using Android
                                    
                                </Text>
                             </View>
                       </View>
                    </View>
              
                </BookmarkReservation>

                <BookmarkReservation title="A Panel with long content text">
                  <Text style={[styles.menuContainer, styles.textStyle]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                     culpa qui officia deserunt mollit anim id est laborum.</Text>
                </BookmarkReservation>

                <BookmarkReservation title="Another Panel">
                  <View style={{margin: 10}}>
                     <View style={[styles.menuContainer, styles.itemContainer ]}>
                        <Image
                              style={{width:'20%', height:'40%', padding: '8%', }}
                              source={require('../../components/images/cokeicon.png')} />
                               
                           <View style={{flexDirection:'column',width: '80%',height:'40%',
                                }}>
                             <View style={{flexDirection: 'row',}}>
                               <Text style={styles.textContainer}>
                                     Coke
                                  </Text>
                                 
                                </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textStyle}>
                                   (Android-only) Sets the elevation of a view, using Android
                                    
                                </Text>
                             </View>
                       </View>
                       
                         <View style={[styles.menuContainer,styles.itemContainer]}>
                          <Image
                                style={{width:'20%', height:'40%', padding: '8%', }}
                                source={require('../../components/images/cokeicon.png')} />
                                 
                             <View style={{flexDirection:'column',width: '80%',height:'40%',
                                  }}>
                               <View style={{flexDirection: 'row',}}>
                                 <Text style={styles.textContainer}>
                                       Coke
                                    </Text>
                                   
                                  </View>
                                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textStyle}>
                                     (Android-only) Sets the elevation of a view, using Android
                                      
                                  </Text>
                               </View>
                         </View>
                       </View>
                </BookmarkReservation>
                
            </ScrollView>

            );
    }

}

var styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 8,
    paddingTop      : 30
  },
  menuContainer:{
    borderWidth: 2,
    
    borderColor: '#ddd',
    borderTopWidth: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRightWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 2,
    padding: 15,
    shadowRadius: 2,
    elevation: 3,
    alignSelf: 'center' 
  },
  itemContainer:{
    flexDirection: 'row',
    
  },
  textStyle:{
     fontSize: 18 , color:'#666465', width:'100%' 
  },
  textContainer:{
    fontSize: 20, color: '#000000'
  }
  
});
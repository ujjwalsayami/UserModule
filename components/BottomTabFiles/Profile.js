import React from 'react';
import {
	View,Text,StyleSheet,Image,
	Button,ViewPagerAndroid

} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import HeaderComponent from '../../components/DrawerFiles/HeaderComponent';
/*183981695600737*/
export default class Profile extends React.Component{

	render(){
		return(
			<View style={{flex: 3, flexDirection: 'column' }}>	
           
			<View style={{height: '40%', width: '100%',}}>
				<ViewPagerAndroid
		           style={styles.viewPager}
		            initialPage={0}
		            peekEnabled={true}>
		            <View style={styles.pageStyle} key="1">
						<Image style={styles.viewPageImageSize}
		                 source={require('../../components/images/mkbhd.jpg')} />
		              
		            </View>
		            <View style={styles.pageStyle} key="2">
		              <Image style={styles.viewPageImageSize}
		                source={require('../../components/images/mkbhd1.jpg')} />
	            	</View>
	       </ViewPagerAndroid>
	       </View>
	       	<View style={{flex:1,justifyContent: 'center',backgroundColor: 'white',}}>
				<Text style={{fontSize: 20, color:'black',alignSelf: 'center' ,}}>
			    		Profile Info	 </Text>    
				<View style={styles.profileContainer}>

			    	
						 <View style={styles.Container}>
							<FontAwesome name="user" size={20} />
							 <Text style={{ marginLeft:20}}>
							   Ujjwal Manandhar
							 </Text>
						  </View>
						  <View style={styles.Container}>
							<EvilIcons name="calendar" size={20} />
							 <Text style={{ marginLeft:20}}>
							   2018-6-18
							 </Text>
						  </View>
						  <View style={styles.Container}>
							<MaterialIcons name="place" size={20} />
							 <Text style={{ marginLeft:20}}>
							   Sitapaila,Ktm,Nepal
							 </Text>
						  </View>
						  <View style={styles.Container}>
							<Zocial name="email" size={20} />
							 <Text style={{ marginLeft:20}}>
							   ujjwalsayami@gmail.com
							 </Text>
						  </View>
						  <View style={styles.Container}>
							<FontAwesome name="phone" size={20} />
							 <Text style={{ marginLeft:20}}>
							   +977-9843760587
							 </Text>
						  </View>
						  <View style={styles.Container}>
							<MaterialCommunityIcons name="human-male" size={20} />
							 <Text style={{ marginLeft:20}}>
							   Male
							 </Text>
						  </View>
						  <View style={styles.Container}>
							<MaterialCommunityIcons name="food" size={20} />
							 <Text style={{ marginLeft:20}}>
							   Non-Veg, Continental
							 </Text>
						  </View>
					
			        </View> 
			     </View>   
		     </View>

			);
	}
}

const styles=StyleSheet.create({
	Container:{
		flex:1, flexDirection: 'row',
		padding:5
	},
	viewPager: {
			flex: 1
            },
    pageStyle: {
            alignItems: 'center',
            },
    viewPageImageSize:{
      width:'100%',
      height:'100%',
     
    },
    profileContainer:{
    	borderWidth: 2,
	    borderRadius: 2,
	 	borderColor: '#ddd',
		borderTopWidth: 0,
		borderBottomWidth: 4,
		borderRightWidth: 4,
		shadowColor: '#000',
		shadowOffset: { width: 5, height: 10 },
		shadowOpacity: 2,
		padding: 15,
		shadowRadius: 2,
		elevation: 2,
		width: '50%',
		height:'80%',
		alignSelf: 'center' 
    }
   
	})


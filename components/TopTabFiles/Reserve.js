import React from 'react';
import{
    StyleSheet,TextInput,
    Text,Image,Button,Alert,View,

} from 'react-native';

export default class Reserve extends React.Component{
	render(){

		return(
			<View style={{flex:1}}>
				
				<View style={[styles.reviewProfile, styles.container ]}>
					<Image
				       	style={{width:'20%', height:'60%', borderRadius: 100,}}
				       	source={require('../../components/images/mkbhd.jpg')} />
					       
						 <View style={{flexDirection:'column',width: '80%',height:'100%',
							  padding:'2%',  }}>
							 <View style={{flexDirection: 'row',}}>
								 <Text style={styles.textContainer}>
							         Michael Jordan
							      </Text>
							      <Text style={{marginLeft: 10,fontSize: 20 , color:'#9a9a9a'} }>
							         2018-6-20 4:20 PM
							      </Text>
						      </View>
						      <Text style={{fontSize: 20}}>
						      	Star comes here
						      </Text>
						      
						      <Text numberOfLines={3} ellipsizeMode='tail' style={styles.textStyle}>
						         (Android-only) Sets the elevation of a view, using Android's underlying
						          elevation API. This adds a drop shadow to the item and affects z-order
						           for overlapping views. Only supported on Android 5.0+, has no effect
						            on earlier versions.
						       </Text>
						      
					</View>
				</View>
			</View>

			);
	}
}

const styles = StyleSheet.create({
	reviewProfile:{
		borderWidth: 2,
	    borderRadius: 8,
	 	borderColor: '#ddd',
		borderTopWidth: 2,
		borderBottomWidth: 4,
		borderRightWidth: 2,
		shadowColor: '#000',
		shadowOffset: { width: 5, height: 10 },
		shadowOpacity: 2,
		padding: 15,
		shadowRadius: 2,
		elevation: 3,
		width: '80%',
		height:'60%',
		alignSelf: 'center' 
	},
	container:{
		flexDirection: 'row',
		margin: 10,
	},
	textStyle:{
		 fontSize: 20 , color:'#9a9a9a', width:'100%' 
	},
	textContainer:{
		fontSize: 20, color: '#000000'
	}

});
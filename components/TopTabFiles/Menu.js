import React from 'react';
import{
    StyleSheet,TextInput,Dimensions,
    Text,Image,Button,Alert,View,SectionList

} from 'react-native';

export default class Menu extends React.Component{
	render(){

		return(
			<View style={{flex:1}}>
						
				<View style={[styles.menuContainer, styles.container ]}>
					<Image
				       	style={{width:'20%', height:'60%', padding: '7%', }}
				       	source={require('../../components/images/cokeicon.png')} />
					       
						 <View style={{flexDirection:'column',width: '80%',height:'60%',
							    }}>
							 <View style={{flexDirection: 'row',}}>
								 <Text style={styles.textContainer}>
							         Coke
							      </Text>
							     
						      </View>
						      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textStyle}>
						         (Android-only) Sets the elevation of a view, using Android's underlying
						          
						      </Text>
						      
						  </View>
				</View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	menuContainer:{
		borderWidth: 2,
	    borderRadius: 8,
	 	borderColor: '#ddd',
		borderTopWidth: 1,
		borderBottomWidth: 2,
		borderRightWidth: 2,
		shadowColor: '#000',
		shadowOffset: { width: 5, height: 10 },
		shadowOpacity: 2,
		padding: 15,
		shadowRadius: 2,
		elevation: 3,
		width: Dimensions.get('window').width / 1.2,
		height:'35%',
		alignSelf: 'center' 
	},
	container:{
		flexDirection: 'row',
		margin: 10,
	},
	textStyle:{
		 fontSize: 18 , color:'#9a9a9a', width:'100%' 
	},
	textContainer:{
		fontSize: 20, color: '#000000'
	}

})
import React from 'react';
import {
	View,Text,StyleSheet,Image,
	Button,TouchableHighlight,

} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class HeaderComponent extends React.Component{

	render(){
		return(
			<View style={{flexDirection: 'row' ,
					alignItems: 'center',height:70, backgroundColor: '#ff6347' }}>
		        
		        <TouchableHighlight 
		        	style={{marginLeft:10, shadowColor:'#ff6347' }}
		        	onPress={()=>{this.props.navigation.toggleDrawer()}}>
		        	
		        	<View style={{ flexDirection: 'row' }}>
			        	<Image
			        		style={{width:32, height:32, opacity: 0.5 }}
			        		source={require('../../components/images/menuicon.png')}
			        	/>
			        	<Text style={{color: 'white', fontSize: 20, marginLeft:10, fontWeight: 'bold'}}>
			        		Categories
			        	</Text>
			        	
		        	</View>
		        	
		        </TouchableHighlight>
		        <TouchableHighlight>
		        <SimpleLineIcons name="options-vertical" size={25} 
		        	style={{position: 'relative'  }} />
		        </TouchableHighlight>
		          
			</View>   
			);
	}

}


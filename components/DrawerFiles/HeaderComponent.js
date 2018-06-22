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
					alignItems: 'center',height:70, backgroundColor: '#ef800d' }}>
		        
		        <TouchableHighlight 
		       		 underlayColor="#f0800d"
		        	style={{marginLeft:10, backgroundColor: '#ef800d', }}
		        	onPress={()=>{this.props.navigation.toggleDrawer()}}>
		        	
		        	<View style={{ flexDirection: 'row' }}>
				        <Image
					        style={{width:'16%', height:32, }}
					     	source={require('../../components/images/menuicon.png')}
				        	/>
				        	<Text style={{color: 'white', fontSize: 20, 
				        	 	marginLeft:10, fontWeight: 'bold'}}>
				        		Categories
				        	</Text>
			        	</View>
			         </TouchableHighlight>
		          	<View style={{flex:1, justifyContent: 'flex-end' }}>
		          	 <Image
					        style={{width:"3%", height:'56%',alignSelf: 'flex-end',marginRight: 20  }}
					     	source={require('../../components/images/option-vertical.png')}
				        	/>
				   		
		        	
		        	</View>
			</View>   
			);
	}

}


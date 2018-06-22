import React from 'react';
import {
	View,Text,StyleSheet,Image,
	Button,

} from 'react-native';
import HeaderComponent from '../../components/DrawerFiles/HeaderComponent';


export default class Places extends React.Component{

	render(){
		return(
			<View style={{flex: 1}}>	
			 
			<View style={{ flex: 1, alignItems: 'center',  }}>
		        <Text >
		           This is Places!
		        </Text>
		          
		     </View>   
		     </View>

			);
	}

}


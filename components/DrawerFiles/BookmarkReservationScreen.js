import React from 'react';
import {
	View,Text,StyleSheet,Image,
	Button,

} from 'react-native';

import HeaderComponent from '../../components/DrawerFiles/HeaderComponent';

export default class BookmarkReservationScreen extends React.Component{

	render(){
		return(
			<View style={{  flex: 1,  }}>
			 <HeaderComponent {...this.props}  />
		        <Text >
		           This is BookmarkReservation Screen!
		        </Text>
		          
		       </View>   
			);
	}

}

import React from 'react';
import {
	View,Text,StyleSheet,Image,
	Button,

} from 'react-native';
import TabBarHeader from './TabBarHeader';
import HeaderComponent from './HeaderComponent';
import TopTabHeader from '../../components/TopTabFiles/TopTabHeader';

export default class ShareScreen extends React.Component{

	render(){
		return(
			<View style={{ flex: 2, position: 'relative' }}>
			 	 <HeaderComponent {...this.props} />
			   
		       <View style={{flex: 1, position: 'relative' }}> 
			      <TabBarHeader {...this.props}/>
			   </View>
		    
			</View>   
			);
	}

}


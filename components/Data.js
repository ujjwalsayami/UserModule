import React from 'react';
import {
	View,Text,Button,Image,StyleSheet,

} from 'react-native';

export default class Data extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	age: props.initialAge,
	  	status:0,
	  	contactnum: props.user.contact,
	  };
	  setTimeout(()=>{this.setState({
		status: 1});},3000);
	}

	

	onMakeMeOlder(){ //this is function 
		this.setState({
			age: this.state.age + 1
		});
	}

	onMakeMeYounger(){
		this.setState({
			age:this.state.age - 1
		});
	}

	render(){
		var text ="SomeText";
		return(
			<View>
				<Text> This is data class from another World! </Text>
				<Text> Data from same class {text}</Text>	
				<Text> Name passed from App.js is {this.props.name}, and age is {this.state.age} </Text>
				<Text> Status is {this.state.status}</Text>
				<View style={{ flexDirection: 'row',justifyContent: 'space-between',}}>
				
					<Button title="Increase Age" onPress={()=>this.onMakeMeOlder()} />
					<Button title="Decrease Age" onPress={()=>this.onMakeMeYounger()} />
					<Button title="Tap to say Hello!" style={{margin: 30}} onPress={this.props.meet} />
				</View>
				<Text> and phone number of AnnaHathaway is {this.state.contactnum[1]}
				 </Text>
				
				<Text> Data from another class {this.props.userArray[0].contact[0]}</Text>	
			</View>
			);
	}
	}

	/*Data.propTypes = {
		name: React.PropTypes.String,
		 age: React.PropTypes.Number,
		 user: React.PropTypes.object
	
	};*/
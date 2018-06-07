import React from 'react';
import {
	View,Text,Button,Image,StyleSheet,TextInput

} from 'react-native';

export default class Data extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	age: props.initialAge,
	  	status:0,
	  	
	  	moduleName: props.initialModuleName,
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
	onChangeModule(){
		this.props.changeModule("Ujjwal")
		//this.props.changeModule(this.state.moduleName)		
	}
	onHandleText(event){
		
			this.state.moduleName=event.target.value;
		//this.props.moduleName(event.target.value);
	}


componentWillMount(){
    console.log("Component Will Mount");
 }

 componentDidMount(){
    console.log("Component Did Mount");
 }

 componentWillReceiveProps(nextProps){
    console.log("Component will receive props",nextProps);
 }

 shouldComponentUpdate(nextProps, nextState){
  console.log("should component update",nextProps,nextState);
  return true;
 }

 componentWillUpdate(nextProps,nextState){
  console.log("component will update ",nextProps, nextState);
 }

 componentDidUpdate(prevProps,prevState){
  console.log("component did update",prevProps, prevState);
 }

 componentWillUnMount(){
  console.log("component will unmount");
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
				
				 <View style={[styles.viewStyle, styles.buttonContainer]} >
					<TextInput style={{width:200}} 
						value={this.state.moduleName} 

						onChangeText={(event)=>this.onHandleText(event)}/>
					<Button title="Change Module Name" 
						onPress={this.onChangeModule.bind(this)}/>
				</View>
				<Text> Data from another class {this.props.userArray[0].contact[0]}</Text>	
			</View>
			);
	}
	}

	
    const styles = StyleSheet.create({
  	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    marginTop: 20,
  },
  viewStyle:{
  	flexDirection: 'row' , 
  },
  
});


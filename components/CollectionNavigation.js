import React from 'react';

import {
	View, Text, FlatList,
	Button, Image,StyleSheet,
} from 'react-native';
import { createDrawerNavigator ,createMaterialTopTabNavigator ,TabBarTop }from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ContactScreen from '../components/DrawerFiles/ContactScreen';
import ProfileScreen from '../components/DrawerFiles/ProfileScreen';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import Drawernavigation from '../components/Drawernavigation';
import SearchScreen from '../components/SearchScreen';
import FavouriteScreen from '../components/FavouriteScreen';
import { List,ListItem } from 'react-native-elements';

class CollectionNavigation extends React.Component{

      state = {
        seed : 1,
        page: 1,
        users:[],
        isLoading: false,
        isRefreshing: false,
      };

      handleRefresh = ()=>{
        this.state({
          seed: this.state.seed + 1,
          isRefreshing : true,

        }, ()=>{
          this.loadUsers();
        });
      };

      handleLoadMore = ()=>{
        this.setState({
          page: this.state.page + 1
        }, ()=>{
          this.loadUsers();
        });
};

    componentDidMount(){
        this.loadUsers();

    };


    loadUsers = ()=>{
      const{ users, seed, page } = this.state;
      this.setState({ isLoading: true});

      fetch('https://randomuser.me/api/?seed=$(seed)&page=$(page)&results=20')
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            users: page === 1 ? res.results : [...users, ...res.results],
            isRefreshing: false,
          });
        })
        .catch( (err) =>{
          console.error(err);
        });
    };

	   navigationOptions:()=>({
        title:'Collection Nav',
        headerStyle:{
          backgroundColor: '#ff6347',
        },
        headerTitleStyle:{
         color: '#fff'
         },
            
      });
  render(){
    const{users , isRefreshing } = this.state;
		return(
			<View style={styles.container}>        
        	
      		  <Text style={styles.textStyle}>
          		Welcome to my World!
       		 </Text>
       	<View style={{margin: 55, width:'100%' ,}}>
          <List >
          <FlatList
              data={users}
              renderItem={({item})=>(
                <ListItem style={{width:'100%' ,color:'red', fontSize: 20 }}
                  
                  roundAvatar
                  title={item.name.first}
                  subtitle={item.email}
                  username ={item.login.username}
                  avatar={{uri: item.picture.thumbnail}}
                  badge={{ value: item.id.value, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                  />
                )}
              keyExtractor={i => i.email}
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
              onEndReached={this.handleLoadMore}
              onEndThreshold={0}
              />
           </List>
        </View>

      </View>
			);
	}

}
const TabNav = createMaterialTopTabNavigator (
  {
    CollectionHome: {screen: CollectionNavigation,
      navigationOptions: () =>({
        tabBarIcon:({tintColor}) =>{
          return(
            <Ionicons name='ios-home' size={25} color={tintColor} />);
        }

      }), 
    },
    
    SignUpPage:{screen: SignUpScreen,
      navigationOptions:()=>({ 
          tabBarIcon:({tintColor}) =>{
          return(
            <FontAwesome name='sign-in' size={25} color={tintColor} />);
        },
        title:'Sign UpPage',
      }), },

    LoginPage:{screen: LoginScreen,
      navigationOptions:()=>({
          tabBarIcon:({tintColor}) =>{
          return(
            <MaterialCommunityIcons name='login' size={25} color={tintColor} />);
        },

        title:'Login Page',
        
      }),
        },
      },{
       
        
      swipeEnabled: true,
      animationEnabled :true,
        tabBarOptions: {
          activeTintColor: '#ff6347',
         inactiveTintColor: '#cccccc',
          inactiveBackgroundColor: '#cccccc',
          activeBackgroundColor: '#ff6347',
          labelStyle: {
          fontSize: 12,
         },
       indicatorStyle: {
         borderBottomColor: '#ff6347',
         borderBottomWidth: 3,
       },
         showIcon: true,
        pressColor:'#4286f4',
        style: {
         backgroundColor: '#ffffff',
      },
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#ffffff',
    width: '100%'
  },
  topLogo: {
    justifyContent: 'center',
    margin: 10,
    height: 25,
    width: 25,
    borderRadius: 0,
  },

  textStyle: {
    color: '#111111',
    textAlign:'center',
    margin: 30,
    paddingTop:20,
    fontSize: 20,
  }
});


export default createDrawerNavigator ({
	TabNav: {
		screen: TabNav,
	},
  Drawernavigation:{
    screen:Drawernavigation,
     
     navigationOptions:()=>({

      //drawerWidth :500,
      padding: 50,

          drawerIcon:({tintColor}) =>{
          return(
            <MaterialCommunityIcons name='login' size={35} color={tintColor} />);
        },

        drawerLabel:'Login Page',
      
        
      }),

  },

  Search:{
    screen:SearchScreen,
    navigationOptions:()=>({

     // drawerWidth :500,
          drawerIcon:({tintColor}) =>{
          return(
            <Ionicons name='ios-search' size={35} color={tintColor} />);
        },

        drawerLabel:'Search',
        
      }),
  },

  ContactUs:{
    screen:ContactScreen,
     navigationOptions:()=>({

      //drawerWidth :500,
          drawerIcon:({tintColor}) =>{
          return(
            <MaterialIcons name='contact-phone' size={35} color={tintColor} />);
        },

        drawerLabel:'Contact',
        
      }),

  },
  Profile :{
    screen:ProfileScreen,
     navigationOptions:()=>({
        drawerLabel:'Profile',

      drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../components/images/homebtnimg.png')}
        style={{width:26, height:26, backgroundColor: '#ffffff'}}
      />
    )
  }),

  }
  

});
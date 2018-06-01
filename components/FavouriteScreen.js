import React from 'react';
import {
  View,Text,StyleSheet,
} from 'react-native';


export default class FavouriteScreen extends React.Component {
  navigationOptions={
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image style={styles.topLogo}
        source={require('../components/images/homebtnimg.png')}
      />
    ),
    tabBarLabel:'Favourite',
    showLabel: true,  

  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is FavouriteScreen! </Text>
      </View>
    );
  }
}

const styles =StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topLogo: {
    justifyContent: 'center',
    margin: 10,
    height: 120,
    width: 120,
    borderRadius: 50,
  },

})

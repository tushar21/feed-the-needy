import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsersList from './components/users.list';
import Home from "./components/home";
import AboutUs from "./components/about";
import UsersDetails from './components/user.details';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const headerStyle = {
    headerStyle: { backgroundColor: '#7EC0EE' },
    headerTitleStyle: { color: '#fff' },
    headerBackTitleStyle : {color : '#fff'}
}

const homeStack = createStackNavigator({
  Home: { 
    screen: Home, 
    navigationOptions:{
      title  : "Home",
      ...headerStyle
    }
  },
  AboutUs: {  
    screen: AboutUs, 
    navigationOptions:{
      title  : "About Us",
      ...headerStyle
    }
  },
})

const pickerStack = createStackNavigator({ 
  UsersList: { 
    screen: UsersList, 
    navigationOptions:{
      title  : "Users List",
      ...headerStyle
    }
  },
  UsersDetails: {
    screen: UsersDetails, 
    navigationOptions:{
      title  : "Users Details",
      ...headerStyle
    }
  }  
});

const App = createBottomTabNavigator({
  Home: homeStack,   
  Users: pickerStack
}, 
{
  initialRouteName : "Users", 
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home`;
      } else if (routeName === 'Users') {
        iconName = `users`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }), 
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    activeBackgroundColor: 'white'
  },
}
);

export default App;



/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UsersList/>
        <Text style={{padding: 10, fontSize: 42}}>This is heading!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
} */

const styles = StyleSheet.create({
  header : {
    backgroundColor: '#fff',
  }/* ,
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 20,
    borderTopColor: "#7EC0EE"
  }, */
});

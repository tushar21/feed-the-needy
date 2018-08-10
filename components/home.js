import React, {Component} from 'react';
import HTTP from '../services/http';
import {Button, StyleSheet, View, Text} from 'react-native';

export default class Home extends Component {
    constructor(){
      super();
      console.log(HTTP.username, "HTTP.username in home component");
      HTTP.username = "Updated at home component";
    }
    render(){
      const { navigate } = this.props.navigation;
      return (
        <View>  
          <Text h2>This is home component and default page</Text>
          <Button title="About Us"  onPress={() => navigate('AboutUs') } />
          <Button title="Users List"  onPress={() => navigate('UsersList') } />
          <Button title="I am ready to pick the food"  onPress={() => navigate('UsersList') } />
        </View>
      )
    }
}
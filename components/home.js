import React, {Component} from 'react';
import HTTP from '../services/http';
import {Button, StyleSheet, View, Text, Platform} from 'react-native';
import Style from '../common/style';
import { Constants } from 'expo';
import LocationSvc from '../utils/location';
export default class Home extends Component {
    
    state = {
        location : null,
        errorMessage : null,
        cities : ['Nagpur', 'Pune', 'Mumbai']
    }

    componentDidMount() {
      
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        console.log('componentDidMount 2222');
        LocationSvc.getCurrentLocation().then((location)=>{
          console.log(location, "locationaaa");
          this.setState({ location });
        });
      }
    }
 
    render(){
      let text = 'Waiting for your location';
      if (this.state.errorMessage) {
        text = this.state.errorMessage;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
      }
      const { navigate } = this.props.navigation;
      return (
        <View style={Style.screen}> 

          <Text h2>This is home component and default page</Text>
          <Text>{text}</Text> 
          <Button title="About Us"  onPress={() => navigate('AboutUs') } />
          <Button title="Users List"  onPress={() => navigate('UsersList') } />
          <Button title="I am ready to pick the food"  onPress={() => navigate('PickerSignup') } />
        </View>
      )
    }
}
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
        LocationSvc.getCurrentLocation().then((locationRes)=>{
          this.setState({ location : {
              city : locationRes[0].city,
              state : locationRes[0].region
          }});
        });
      }
    }
 
    render(){ 
      const { navigate } = this.props.navigation;
      return (
        <View style={Style.screen}> 
          <View style={{flex:0, flexDirection: 'row', padding : 10,backgroundColor : '#ccc'}}>
            <View style={{flex: 5, justifyContent: 'center'}}>
                <Text h2 style={{color : '#000', fontSize : 15}}>Your City : {(this.state.location) ? this.state.location['city']: 'Loading'} </Text>
            </View>
            <View style={{flex: 3}}>
                <Button title="About Us" color="transparent" color='#00b200' onPress={() => navigate('AboutUs') } />
            </View>
            
          </View>
          
          <Button title="About Us" onPress={() => navigate('AboutUs') } />
          <Button title="Users List" onPress={() => navigate('UsersList') } />
          <Button title="I am ready to pick the food" onPress={() => navigate('PickerSignup') } />
        </View>
      )
    }
}    
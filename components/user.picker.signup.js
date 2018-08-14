import React from 'react';
import HTTP from '../services/http';
import  {Text, View, TextInput, Button, ScrollView} from 'react-native';
import Style from '../common/style';
import ButtonT from './shared/button';
import Location from '../utils/location';
export default class PickerSignup extends React.Component{
    constructor(){
      super();
      console.log(HTTP.username, "HTTP.username in PickerSignup component");
      this.state = {
          location: null,
          form: {
            first_name : null,
            last_name : null,
            email : null,
            contact: null,
            city : null,
            state: null,
            latitude : null,
            longitude : null,
            country : 'IN' 
          }
      }
    }

    signup(){
        console.log("console called");
    }    

    componentDidMount(){
        Location.getCurrentLocation()
        .then((locationResponse)=>{
            this.setState({
                form : {
                    city : locationResponse[0].city,
                    state : locationResponse[0].region
                }
            }) 
        })
    }
    render(){ 
      return( 
          <View style={Style.screen}> 
                
                <ScrollView>
                <TextInput style={Style.textInput} onChangeText={(fname) => this.setState({form: {first_name : fname}})} value={this.state.form.first_name} placeholder="First Name"/>  

                <TextInput style={Style.textInput} onChangeText={(lname) => this.setState({form: {last_name : lname}})} value={this.state.form.last_name} placeholder="Last Name"/>

                <TextInput style={Style.textInput} onChangeText={(email) => this.setState({form: {email : email}})} value={this.state.form.email} placeholder="Email"/>

                <TextInput style={Style.textInput} onChangeText={(contact) => this.setState({form: {contact : contact}})} value={this.state.form.contact} placeholder="Phone No"/>

                {/* <View style={{ flexDirection: 'row', marginLeft: 15}}>
                    <Button title="Fetch my current location" onPress={()=>this.fetchMyLocation()} style={{borderRadius: 20}}/>
                </View> */}

                <TextInput style={Style.textInput} onChangeText={(state) => this.setState({form: {state : state}})} value={this.state.form.state} placeholder="State"/>

                <TextInput style={Style.textInput} onChangeText={(city) => this.setState({form: {city : city}})} value={this.state.form.city} placeholder="City"/>

                </ScrollView>
                

                
                    
          </View>        
      )
    }   
}

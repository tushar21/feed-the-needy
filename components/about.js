import React from 'react';
import HTTP from '../services/http';
import  {Text} from 'react-native';

export default class AboutUs extends React.Component{
    constructor(){
      super(); 
      console.log(HTTP.username, "HTTP.username in about component");
      //HTTP.username = "Updated at about component";
    }
    render(){
      return(
        <Text>This is AboutUs component</Text>
      )
    }
}

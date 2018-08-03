import React from 'react';
import HTTP from '../services/http';
export default class AboutUs extends React.Component{
    constructor(){
      console.log(HTTP.username, "HTTP.username in about component");
      //HTTP.username = "Updated at about component";
    }
    render(){
      return(
        <h2 className="col-md-1">This is AboutUs component</h2>
      )
    }
}

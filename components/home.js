import React, {Component} from 'react';
import HTTP from '../services/http';
export default class Home extends Component {
    constructor(){
      console.log(HTTP.username, "HTTP.username in home component");
      HTTP.username = "Updated at home component";
    }
    render(){
      return (
        <div>  
          <h2>This is home component and default page</h2>
        </div>
      )
    }
}
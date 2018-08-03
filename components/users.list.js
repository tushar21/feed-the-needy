import React from 'react';
import CONFIG from '../utils/configs';
import HTTP from '../services/http';
import { StyleSheet, Text, View } from 'react-native';
import ButtonT from './shared/button';

export default class UsersList extends React.Component{

    constructor(props){
      super(props);
      
      this.state ={
        users : null,
        pagination:{
          per_page : CONFIG.PAGINATION.PER_PAGE,
          page : 1
        }
      }
    }

    componentWillMount() {
      HTTP.get("users.json")
      .then(res=>res.json())
      .then((users)=>{
        this.setState({users: users.map((userData)=> <tr key={userData.id}><td>{userData.first_name}</td><td>{userData.last_name}</td><td>{userData.email}</td><td>{userData.gender}</td><td>{userData.ip_address}</td></tr>)});
      })
    }

    render(){
      return(
        <View>
          <Text>Display Type</Text>
          <ButtonT title="testing button"/>
         
        </View>
      )
    }    
}
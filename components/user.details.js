import React from 'react';
import HTTP from '../services/http';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class UsersDetails extends React.Component{

    constructor(props){        

        super(props);
        this.state ={
        users : null,
        details : null
        }
      
    }

    componentWillMount() {
        console.log(this.props.navigation.getParam('userId'), "this.props.navigation.getParam('userId')");
      HTTP.get("user/"+this.props.navigation.getParam('userId'))
      .then(res=>res.json())
      .then((users)=>{
          console.log(users[0], "user details");
          this.setState({details: (users && users.length)? users[0] : null});
      })
      .catch(function(err){ 
        console.log(err, "Error in fetching user details", err );
      })   
    }

    render(){    
      
      let firstName = 'ddddd';

      console.log(this.state.details, "this.state.details in render");

      if(this.state.details && this.state.details['first_name']){  
        firstName = (<Text>First Name :</Text>)
      }      
      
      return(
        <View> 
             {firstName}
        </View>
      )
    }    
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: '#ccc',
    borderBottomWidth : 1
  },
})

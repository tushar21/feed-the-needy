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
      
      let lists= [],listView; 

      if(this.state.details && this.state.details['first_name']){  
        lists.push(<Text>First Name : {this.state.details['first_name']}</Text>);
      }   

      if(this.state.details && this.state.details['last_name']){  
        lists.push(<Text>Last Name : {this.state.details['last_name']}</Text>);
      }
      
      if(this.state.details && this.state.details['contact']){  
        lists.push(<Text>Contact :{ this.state.details['contact']}</Text>);
      }

      if(this.state.details && this.state.details['email']){  
        lists.push(<Text>Email : {this.state.details['email']}</Text>);
      }
     
      
      return(
        <View>
         {<FlatList 
          data={lists} 
          renderItem={({item}) => <Text style={styles.list}>{item}</Text>} 
          keyExtractor = { (item, index) => index.toString() } />}
        </View>
      )
    }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    flexGrow: 1,
    width: 0 
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: '#ccc',
    borderBottomWidth : 1
  },
  list: {
    /* flex: 1,
    flexDirection : 'column' */
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16    
  }
})

import React from 'react';
import CONFIG from '../utils/configs';
import HTTP from '../services/http';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ButtonT from './shared/button';
import UsersDetails from './user.details';
import Style from '../common/style';

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
      HTTP.get("user/list/picker")
      .then(res=>res.json())
      .then((users)=>{
        this.setState({users: users});
      })
      .catch(function(err){
        console.log(err, "Error in fetching pickers");
      })   
    }

    render(){
      const { navigate } = this.props.navigation; 
      return( 
        <View style={Style.screen}>
          <FlatList  
          data={this.state.users} 
          renderItem={({item}) => <View onPress={()=>navigate('UsersDetails', {userId : item._id})} style={{flex: 1, flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth : 1,padding: 15}}>
              <Text style={{fontSize: 20}}> {item.first_name} {item.last_name} </Text>
          </View>
          }
          keyExtractor = { (item, index) => index.toString() } />         
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

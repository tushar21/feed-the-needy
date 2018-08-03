import React from 'react';
import CONFIG from '../utils/configs';
import UsersList from './users.list';
import UserFilter from './user.filter';
import { connect } from 'react-redux';
import Pagination from './shared/pagination';

class Users extends React.Component{
  
    constructor(){

      this.per_page = 13;
      this.state = {
        viewType : 'list',
        pagination:{
          per_page : CONFIG.PAGINATION.PER_PAGE,
          page : 1
        }
      }
      this.changeDisplayType =  this.changeDisplayType.bind(this);

    }

    // componentDidMount() {
    //   fetch(CONFIG.API_URL+"todos")
    //   .then(res=>res.json())
    //   .then(function(todos){
    //     console.log(todos, "called all todos")
    //   })
    // }

    changeDisplayType(){
        let toggledType = (this.state.viewType == 'list') ? 'grid' : 'list';
        this.setState({
          viewType : toggledType
        });
    }

    render(){
      return(
        <div>
          <UserFilter/>
          Per Page : {this.per_page}
          <UsersList updateUserName={this.props.updateUser} view={this.state.viewType} />
          <Pagination total="134" currentPage="2" per_page={this.per_page}/>
          <button onClick={this.changeDisplayType}>Change display type</button>
          <p>{this.props.username}</p>
        </div>
      )
    }    
}

const mapStateToProps = (state) => {
    return {
        username : state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser : ()=>{
            dispatch({
              type: "UPDATE_USERNAME",
              payload : "updated_user"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
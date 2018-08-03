import React, {Component} from "react";

export default class UserFilter extends Component{

  constructor(){
    this.state = {
      selectedFilter : 1
    }
  }

  changeFilter(event){
    console.log(event.target.value, "event");
  }

  render(){
      return (
        <div>
          <select onChange={this.changeFilter}>
            <option value="0">Completed</option>
            <option value="1">Not Completed</option>        
          </select>
        </div>
      )
  }


}
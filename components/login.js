import React, {Component} from 'react';
import CONFIG from '../utils/configs';

export default class UserLogin extends React.Component{

    constructor(){
      this.state = {
        form: {
          username : "",
          password : ""
        }
      }
      this.doLogin = this.doLogin.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    async doLogin(event){
      console.log(this.state, "this state while login");
      console.log(event.target, "event target");
      event.preventDefault();

      const fetchUrl = await fetch(CONFIG.AWS_API_URL+'login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      });
      const fetchResponse = await fetchUrl.json();
      console.log(fetchResponse, "fetchResponse");
    }

    
    handleChange(event){
      this.setState(
        {
          form :{
            ...this.state.form,
            [event.target.name] : event.target.value
          }
        }
      )
    }

    render(){
      return (
          <div className="">
              <h2>User Login</h2>
              <form onSubmit={this.doLogin}>
                  <input type="text" name="username" value={this.state.form.username} onChange={this.handleChange}/>
                  <input type="password" name="password" value={this.state.form.password} onChange={this.handleChange}/>
                  <button type="submit">Login</button>
              </form>
          </div>
      );
    }
   

}
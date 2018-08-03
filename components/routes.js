import React from 'react';
import { Route } from 'react-router-dom';
import Users from './users';
import AboutUs from './about';
import Home from './home';
import UserLogin from './login';

export default class AppRoutes extends React.Component {
  render(){
    return (
      <div>
        <Route path="/login" component={UserLogin}/>
        <Route path="/user" component={Users} />
        <Route path="/about-us" component={AboutUs} />
        <Route exact path="/" component={Users} />
      </div>
    );
  }
} 
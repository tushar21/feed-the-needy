import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = props => ({
  render() {
    console.log(props.isLoggedIn, "isLoggedIn");
    if(props.isLoggedIn){
      return (
        <div className="o-container">
          <Header />
          <div className="container">
            <main>{props.children}</main>
          </div>
          <Footer />
        </div>
      );
    }
    else{
      return (
        <div className="container">
            <main>{props.children}</main>
        </div>
      );
    }
  }
});

export default Layout;

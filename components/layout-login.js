import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = props => ({
  render() {
    return (
        <div className="container">
          <main>{props.children}</main>
        </div>
    );
  }
});

export default Layout;

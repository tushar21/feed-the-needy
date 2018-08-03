import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render(){
      return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to='/' >Home</Link>
                  </li>
                  <li><Link to='/user'>User</Link></li>
                  <li><Link to='/about-us' >About Us</Link></li>
                </ul>
              </div>    
            </div>
          </nav>
        </div>
      )
    }
}
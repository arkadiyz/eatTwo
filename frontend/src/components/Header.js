import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.js';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import UserService from '../services/UserService';

export class Header extends Component {
  state = {
    isLogIn: UserService.checkConnection(),
  };

  handleClick = () => {
    this.setState(prevState => ({ isLogIn: !prevState.isLogIn }));
  };
  onLogout = () => {
    UserService.logout();
    this.setState(prevState => ({ isLogIn: !prevState.isLogIn }));
  };
  onLogIn = () => {
    this.setState(prevState => ({ isLogIn: !prevState.isLogIn }));
  };
  checkLogIn = () => {
    return UserService.checkConnection();
  };
  render() {
    return (
      <div className='main-header-container'>
        <div className='header-container  flex'>
          <div className='header-logo flex-basis-30 flex'>
            <div className='header-img'></div>
            <Link to='/'>
              <h1>umami</h1>
            </Link>
          </div>
          <NavBar></NavBar>
          <div className='header-controls flex-basis-30 flex align-center justify-end'>
            {this.state.isLogIn && (
              <>
                <div className='margin-right-30'>
                  <Link className='' to={`/user/${JSON.parse(UserService.getUserLoggedIn())._id}`}>
                    <img style={{ width: '30px', height: '30px' }} src={require('../assets/img/layout/dish-cover.svg')} alt='' />
                  </Link>
                </div>
                <span>|</span>
                <div className=''>
                  <a href='' onClick={this.onLogout}>
                    Logout
                  </a>
                </div>
              </>
            )}
            {!this.state.isLogIn && (
              <>
                <Login onLogIn={this.onLogIn}></Login> <span>|</span>
                <Signup></Signup>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <span className='NavBar-welcome'>Welcome, {(props.user.nickName) ? (props.user.nickName) : (props.user.firstName)}</span>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/profile' className='NavBar-link'>Profile</Link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Logout</Link>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>Sign In</Link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>Sign Up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;

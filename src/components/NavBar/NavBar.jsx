import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar'>
      <div className="left">
        <Link to='/' className='NavBar-link'>Home</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/profile' className='NavBar-link'>Profile</Link>
      </div>
      <div className="right">
        <Link to='' className='NavBar-link' onClick={props.handleSignOut}>Sign Out</Link>
      </div>
    </div>
    :
    <div className='NavBar'>
      <div className="left">
        <Link to='/' className='NavBar-link'>Home</Link>
      </div>
      <div className="right">
        <Link to='/signup' className='NavBar-link'>Sign Up</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/signin' className='NavBar-link'>Sign In</Link>
      </div>
    </div>;

  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;

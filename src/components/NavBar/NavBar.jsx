import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar'>
      <div className="navbar-left">
        <Link to='/' className='NavBar-link'>Home</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/about' className='NavBar-link'>About</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/contact' className='NavBar-link'>Contact</Link>
      </div>
      <div className='navbar-center'>
        <Link to='/map' className='NavBar-link'>Map</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/warbands' className='NavBar-link'>Warbands</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/rangers' className='NavBar-link'>Rangers</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/companions' className='NavBar-link'>Companions</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/bestiary' className='NavBar-link'>Bestiary</Link>
      </div>
      <div className="navbar-right">
        <Link to='/profile' className='NavBar-link'>Profile</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link' onClick={props.handleSignOut}>Sign Out</Link>
      </div>
    </div>
    :
    <div className='NavBar'>
      <div className="navbar-left">
        <Link to='/' className='NavBar-link'>Home</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/about' className='NavBar-link'>About</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/contact' className='NavBar-link'>Contact</Link>
      </div>
      <div className='navbar-center'>
        <Link to='/map' className='NavBar-link'>Map</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/bestiary' className='NavBar-link'>Bestiary</Link>
      </div>
      <div className="navbar-right">
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

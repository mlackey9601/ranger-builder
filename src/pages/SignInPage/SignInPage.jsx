import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';
import * as userAPI from '../../services/user-api';

class SignInPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userAPI.signIn(this.state);
      this.props.handleSignupOrSignIn();
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="SignInPage">
        <header className="heading">Sign In</header>
        &nbsp;&nbsp;&nbsp;
        <form onSubmit={this.handleSubmit} >
          <div>
            <input 
              autoComplete="off"
              type="email" 
              placeholder="Email"
              value={this.state.email} 
              name="email" 
              onChange={this.handleChange} 
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <input
              autoComplete="off" 
              type="password"
              placeholder="Password" 
              value={this.state.pw} 
              name="pw" 
              onChange={this.handleChange} 
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <center>
            <div>
              <button>Sign In</button>
              &nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </center>
        </form>
      </div>
    );
  }
}

export default SignInPage;

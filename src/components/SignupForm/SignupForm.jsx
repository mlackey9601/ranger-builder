import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/user-api';

class SignUpForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userAPI.signUp(this.state);
      this.props.handleSignupOrSignIn();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.firstName && this.state.lastName && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <center>
          <header className="signup-heading">Sign Up</header>
        </center>
        &nbsp;&nbsp;&nbsp;
        <form onSubmit={this.handleSubmit} >
          <div>
            <input 
              type="text"
              placeholder="First Name" 
              value={this.state.firstName} 
              name="firstName" 
              onChange={this.handleChange} 
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <input 
              type="text"
              placeholder="Last Name" 
              value={this.state.lastName} 
              name="lastName" 
              onChange={this.handleChange} 
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <input 
              type="text"
              placeholder="Nickname (Optional)" 
              value={this.state.nickName} 
              name="nickName" 
              onChange={this.handleChange} 
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <input 
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
              type="password" 
              placeholder="Password" 
              value={this.state.password} 
              name="password" 
              onChange={this.handleChange} 
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={this.state.passwordConf} 
              name="passwordConf" 
              onChange={this.handleChange} 
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <center>
            <div>
              <button
                disabled={this.isFormInvalid()}       
              >
                Sign Up
              </button>
              &nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </center>
        </form>
      </div>
    );
  }
}

export default SignUpForm;

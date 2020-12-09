import React, { Component } from 'react';
import * as userAPI from '../../services/user-api';
import './SignUpForm.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CancelButton = withStyles((theme) => ({
  root: {
    color: 'rgba(241, 230, 211, 1)',
    backgroundColor: 'rgba(37, 35, 31, 1)',
    fontFamily: 'Cinzel Decorative',
    textAlign: 'center',
    fontSize: '1.2vmin',
    height: '4vmin',
    width: '9vmin',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(100, 28, 39, 1)',
      color: 'rgba(255, 255, 255, 1)',
      textShadow: '0 0 8px rgba(241, 230, 211, 1)',
    },
  },
}))(Button);

const SignUpButton = withStyles((theme) => ({
  root: {
    color: 'rgba(241, 230, 211, 1)',
    backgroundColor: 'rgba(37, 35, 31, 1)',
    fontFamily: 'Cinzel Decorative',
    textAlign: 'center',
    fontSize: '1.2vmin',
    height: '4vmin',
    width: '9vmin',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(24, 29, 75, 1)',
      color: 'rgba(255, 255, 255, 1)',
      textShadow: '0 0 8px rgba(241, 230, 211, 1)',
    },
  },
}))(Button);

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
      <div className="form-container">
        <form autoComplete="off">
          <div>
            <input
              autoComplete="off" 
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
              autoComplete="off" 
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
              autoComplete="off" 
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
              autoComplete="off"
              type="email"
              placeholder="Email" 
              value={this.state.email} 
              name="email" 
              onChange={this.handleChange}
              required
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <input
              autoComplete="off"
              type="password" 
              placeholder="Password" 
              value={this.state.password} 
              name="password" 
              onChange={this.handleChange}
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <input
              autoComplete="off"
              type="password" 
              placeholder="Confirm" 
              value={this.state.passwordConf} 
              name="passwordConf" 
              onChange={this.handleChange}
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <center>
            <div className="buttons">
              <SignUpButton
                variant="contained"
                onClick={this.handleSubmit}
              >
                Sign Up
              </SignUpButton>
              <CancelButton
                variant="contained"
                type="submit"
                formaction="/"
              >
                Cancel
              </CancelButton>
            </div>
          </center>
        </form>
      </div>
    );
  }
}

export default SignUpForm;

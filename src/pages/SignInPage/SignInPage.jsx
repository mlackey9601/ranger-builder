import React, { Component } from 'react';
import './SignInPage.css';
import * as userAPI from '../../services/user-api';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

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

const SignInButton = withStyles((theme) => ({
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
      backgroundColor: 'rgba(48, 88, 38, 1)',
      color: 'rgba(255, 255, 255, 1)',
      textShadow: '0 0 8px rgba(241, 230, 211, 1)',
    },
  },
}))(Button);

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
        <header className="signin-heading">Sign In</header>
        &nbsp;&nbsp;&nbsp;
        <div className="signin-container">
          <img className="signup-img" alt="weapons" src="https://i.imgur.com/uFbwfvd.jpg"></img>
          <div className="form-container">
            <form autoComplete="off">
              <div>
                <input
                  label="Email"
                  autoComplete="off"
                  type="email"
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
                  placeholder=" Password" 
                  value={this.state.pw} 
                  name="pw" 
                  onChange={this.handleChange}
                />
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="buttons">
                <SignInButton
                  variant="contained"
                  onClick={this.handleSubmit}
                >
                  Sign In
                </SignInButton>
                <CancelButton
                  variant="contained"
                  type="submit"
                  formaction="/"
                >
                  Cancel
                </CancelButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;

import React, { Component } from 'react';
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
        <header className="signin-heading">Sign In</header>
        &nbsp;&nbsp;&nbsp;
        <div className="signin-container">
          <img className="signup-img" alt="weapons" src="https://i.imgur.com/uFbwfvd.jpg"></img>
          <div className="form-container">
            <form autoComplete="off">
              <div>
                <input 
                  autoComplete="off"
                  type="email" 
                  placeholder=" Email"
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
                <button
                  className="signin btn"
                  onClick={this.handleSubmit}
                >
                  Sign In
                </button>
                <input
                  type="submit"
                  value="Cancel"
                  className="cancel btn"
                  formaction="/"
                >
                </input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;

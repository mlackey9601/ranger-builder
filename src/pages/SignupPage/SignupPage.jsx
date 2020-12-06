import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './SignUpPage.css';

class SignUpPage extends Component {
  state = {
    message: ''
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignUpPage'>
        <header className="signup-heading">Sign Up</header>
        &nbsp;&nbsp;&nbsp;
        <div className="signup-container">
          <img className="signup-img" alt="weapons" src="https://i.imgur.com/ion9qhj.jpg"></img>
          <SignUpForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default SignUpPage;

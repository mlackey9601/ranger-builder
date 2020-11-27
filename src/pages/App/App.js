import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpPage from '../SignUpPage/SignUpPage';
import SignInPage from '../SignInPage/SignInPage';
import ProfilePage from '../ProfilePage/ProfilePage'
import * as rangerAPI from '../../services/ranger-api';
import * as userAPI from '../../services/user-api';
import Ranger from '../../components/Ranger/Ranger';
import HomePage from '../../pages/HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    rangers: null
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleSignOut = () => {
    userAPI.signOut();
    this.setState({ user: null });
  }

  handleSignupOrSignIn = () => {
    this.setState({user: userAPI.getUser()});
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const rangers = await rangerAPI.index();
    this.setState({ rangers });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleSignOut={this.handleSignOut}
        />
        <Switch>
          <Route exact path='/signin' render={({ history }) => 
            <SignInPage
              history={history}
              handleSignupOrSignIn={this.handleSignupOrSignIn}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignUpPage
              history={history}
              handleSignupOrSignIn={this.handleSignupOrSignIn}
            />
          }/>
          <Route exact path='/profile' render={() => 
            userAPI.getUser() ? 
              <ProfilePage 
                user={this.state.user}
              />
            :
              <Redirect to='/signin'/>
          }/>
          <Route exact path='/' render={() =>
            <HomePage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

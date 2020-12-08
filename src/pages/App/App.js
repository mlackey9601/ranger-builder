import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpPage from '../SignUpPage/SignUpPage';
import SignInPage from '../SignInPage/SignInPage';
import ProfilePage from '../ProfilePage/ProfilePage'
import * as rangerAPI from '../../services/ranger-api';
import * as userAPI from '../../services/user-api';
import HomePage from '../../pages/HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ContactPage from '../../pages/ContactPage/ContactPage'
import RangersPage from '../../pages/RangersPage/RangersPage';
import ReferencesPage from '../../pages/ReferencesPage/ReferencesPage';
import MapPage from '../../pages/MapPage/MapPage';
import BestiaryPage from '../../pages/BestiaryPage/BestiaryPage';
import PlayOrderPage from '../../pages/PlayOrderPage/PlayOrderPage';
import CompanionsPage from '../../pages/CompanionsPage/CompanionsPage';
import WarbandsPage from '../../pages/WarbandsPage/WarbandsPage';

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
          <Route exact path='/references' render={() =>
            <ReferencesPage />
          }/>
          <Route exact path='/references/map' render={() =>
            <MapPage />
          }/>
          <Route exact path='/references/bestiary' render={() =>
            <BestiaryPage />
          }/>
          <Route exact path='/references/playorder' render={() =>
            <PlayOrderPage />
          }/>
          <Route exact path='/about' render={() =>
            <AboutPage />
          }/>
          <Route exact path='/contact' render={() =>
            <ContactPage />
          }/>
          <Route exact path='/warbands' render={() =>
            <WarbandsPage />
          }/>
          <Route exact path='/rangers' render={() =>
            <RangersPage />
          }/>
          <Route exact path='/companions' render={() =>
            <CompanionsPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

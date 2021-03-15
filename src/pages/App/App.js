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
import SkillsPage from '../SkillsPage/SkillsPage';
import AbilitiesPage from '../../pages/AbilitiesPage/AbilitiesPage';
import SpellsPage from '../../pages/SpellsPage/SpellsPage';
import EquipmentPage from '../../pages/EquipmentPage/EquipmentPage';
import WeaponsPage from '../../pages/WeaponsPage/WeaponsPage';
import HerbsPage from '../../pages/HerbsPage/HerbsPage';
import MagicPage from '../../pages/MagicPage/MagicPage';
import ConditionsPage from '../../pages/ConditionsPage/ConditionsPage';
import EndGamePage from '../../pages/EndGamePage/EndGamePage';

class App extends Component {
  state = {
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
          <Route exact path='/references/skills' render={() =>
            <SkillsPage />
          }/>
          <Route exact path='/references/abilities' render={() =>
            <AbilitiesPage />
          }/>
          <Route exact path='/references/spells' render={() =>
            <SpellsPage />
          }/>
          <Route exact path='/references/equipment' render={() =>
            <EquipmentPage />
          }/>
          <Route exact path='/references/weaponsandarmour' render={() =>
            <WeaponsPage />
          }/>
          <Route exact path='/references/herbsandpotions' render={() =>
            <HerbsPage />
          }/>
          <Route exact path='/references/magic' render={() =>
            <MagicPage />
          }/>
          <Route exact path='/references/conditions' render={() =>
            <ConditionsPage />
          }/>
          <Route exact path='/references/endofgame' render={() =>
            <EndGamePage />
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

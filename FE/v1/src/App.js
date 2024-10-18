import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import LoginPage from './loginPage';
import MainPage from './mainPage';
import Preferences from './preferencesPage';
import SignUpPage from './SignUpPage';
import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/main" component={MainPage}/>
        <Route path="/preferences" component={Preferences}/>
      </Switch>
    </div>
  );
}

export default App;

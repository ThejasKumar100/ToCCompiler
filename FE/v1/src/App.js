import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import LoginPage from './loginPage';
import MainPage from './mainPage';
import Preferences from './preferencesPage';
import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <Route path="/main" component={MainPage}/>
        <Route path="/preferences" component={Preferences}/>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import HomePage from './components/HomePage';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/homepage' component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;

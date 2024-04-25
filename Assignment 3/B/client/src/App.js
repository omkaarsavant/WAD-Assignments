import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Nav from "./components/NavBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MainApp from "./components/MainApp";
import withAuth from "./components/withAuth";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/login" />
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/app" component={withAuth(MainApp)} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;

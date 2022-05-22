
import './App.scss';
import Nav from './components/Navigation/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Users from './components/Users/User';
import { ToastContainer } from 'react-toastify';
import _ from 'lodash';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    let sesstion = sessionStorage.getItem('account');
    if (sesstion) {
      setAccount(JSON.parse(sesstion))
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        {account && !_.isEmpty(account) && account.isAuthenticated
          && <Nav />
        }

        <Switch>
          <Route path="/news">
            News
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/contact">
            Contact
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </Router>
  );
}

export default App;

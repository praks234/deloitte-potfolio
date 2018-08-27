import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './containers/HomePage/HomePage';
import Layout from './hoc/Layout/Layout'


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path = "/" exact component={HomePage} />
      </Switch>
    );
    return (
      <div className="App"> 
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;

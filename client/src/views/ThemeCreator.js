import '../styles/ThemeCreator.css';
import React from 'react';
import cx from "classnames";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CreateAccount from './CreateAccount';
import CreateElement from './CreateElement';
import CreateTheme from './CreateTheme';
import ExploreElements from './ExploreElements';
import ExploreThemes from './ExploreThemes';

class ThemeCreator extends React.Component {
  render(){
    return (
      <Router>
      <div>
        <nav className={cx()}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default ThemeCreator;

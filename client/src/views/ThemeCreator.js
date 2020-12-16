import "../styles/ThemeCreator.css";
import React from "react";
import cx from "classnames";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import CreateAccount from "./CreateAccount";
import CreateElement from "./CreateElement";
import CreateTheme from "./CreateTheme";
import ExploreElements from "./ExploreElements";
import ExploreThemes from "./ExploreThemes";
import Main from "./Main";

// components
import NavBar from "../components/NavBar";

class ThemeCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <NavBar
          onClick={() => {
            this.refreshNav();
          }}
        />
        <main>
          <Route exact path="/" component={Main} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/create-element" component={CreateElement} />
          <Route exact path="/create-theme" component={CreateTheme} />
          <Route exact path="/element-explorer" component={ExploreElements} />
          <Route exact path="/theme-explorer" component={ExploreThemes} />
        </main>
      </Router>
    );
  }
}

export default ThemeCreator;

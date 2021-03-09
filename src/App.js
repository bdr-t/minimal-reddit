import HomePage from "./components/homePage/HomePage";
import React from "react";
import SubReddit from "../src/components/subreddit/SubReddit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <HomePage />
              </React.Fragment>
            )}
          />
          <Route exact path="/r/:subReddit" component={SubReddit} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

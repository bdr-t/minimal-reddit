import React from "react";
// import './App.css'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import PostList from "./components/postlist/PostList";

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
                <PostList />
              </React.Fragment>
            )}
          />
          <Route exact path="/r/:subReddit" component={PostList} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

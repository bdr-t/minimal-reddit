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
import Callback from "./components/callback/CallBack";

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
          <Route exact path="/hot" component={PostList} />
          <Route exact path="/new" component={PostList} />
          <Route exact path="/top" component={PostList} />
          <Route exact path="/rising" component={PostList} />
          <Route exact path="/callback" component={Callback} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

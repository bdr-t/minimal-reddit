import React from "react";
// import './App.css'
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import Callback from "./components/CallBack";
import UserProfile from './components/UserProfile'
import PostPage from './components/PostPage'
import {AppDiv} from "./styledComponents"


function App() {

  return (
    <Router>
      <AppDiv>
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
          <Route exact path="/u/:user" component={UserProfile} />
          <Route exact path="/r/:subReddit" component={PostList} />
          <Route exact path="/r/:subReddit/hot" component={PostList} />
          <Route exact path="/r/:subReddit/top" component={PostList} />
          <Route exact path="/r/:subReddit/new" component={PostList} />
          <Route exact path="/r/:subReddit/rising" component={PostList} />
          <Route exact path="/r/:subReddit/best" component={PostList} />
          <Route exact path="/hot" component={PostList} />
          <Route exact path="/new" component={PostList} />
          <Route exact path="/top" component={PostList} />
          <Route exact path="/best" component={PostList} />
          <Route exact path="/rising" component={PostList} />
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/post/:id" component={PostPage} />
          <Route exact path="/r/:subReddit/post/:id" component={PostPage} />

          <Redirect to="/" />
        </Switch>
      </AppDiv>
    </Router>
  );
}

export default App;

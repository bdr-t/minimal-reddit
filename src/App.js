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
import New from "./components/New";
import Top from "./components/Top";
import Rising from "./components/Rising";
import Hot from "./components/Hot";

function App() {

  return (
    <Router>
      <AppDiv>
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
          <Route exact path="/u/:user" component={UserProfile} />
          <Route exact path="/r/:subReddit" component={PostList} />
          <Route exact path="/r/:subReddit/hot" component={Hot} />
          <Route exact path="/r/:subReddit/top" component={Top} />
          <Route exact path="/r/:subReddit/new" component={New} />
          <Route exact path="/r/:subReddit/rising" component={Rising} />
          <Route exact path="/hot" component={Hot} />
          <Route exact path="/new" component={New} />
          <Route exact path="/top" component={Top} />
          <Route exact path="/rising" component={Rising} />
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

import React, {useEffect} from "react";
// import './App.css'
import "./App.css";
import { useDispatch } from "react-redux";
import { refreshToken } from "./redux/slices/authorizationSlice";

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

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    let refresh_token = window.localStorage['refreshToken']
    if(refresh_token !== 'undefined' && window.localStorage['refreshToken'] ){
      dispatch(refreshToken(refresh_token))
    } else{
      console.log('there is no refreshtoken in local storage')
    }
  })
  



  


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
          <Route exact path="/u/:user" component={UserProfile} />
          <Route exact path="/r/:subReddit" component={PostList} />
          <Route exact path="/r/:subReddit/hot" component={PostList} />
          <Route exact path="/r/:subReddit/top" component={PostList} />
          <Route exact path="/r/:subReddit/new" component={PostList} />
          <Route exact path="/r/:subReddit/rising" component={PostList} />
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

import React from 'react';
// import './App.css'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import {useSelector} from 'react-redux'


import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PostList from './components/PostList';
import Callback from './components/CallBack';
import PostPage from './components/PostPage';
import { AppDiv } from './styledComponents';
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {

  const theme = useSelector(state => state.authorization.theme)

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {/* <button onClick={themeToggler} >haha</button> */}
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
          <Route exact path="/u/:user" component={PostList} />
          <Route exact path="/r/:subReddit" component={PostList} />
          <Route exact path="/r/:subReddit/hot" component={PostList} />
          <Route exact path="/r/:subReddit/top" component={PostList} />
          <Route exact path="/r/:subReddit/top/:id" component={PostList} />
          <Route exact path="/r/:subReddit/new" component={PostList} />
          <Route exact path="/r/:subReddit/rising" component={PostList} />
          <Route exact path="/r/:subReddit/best" component={PostList} />
          <Route exact path="/hot" component={PostList} />
          <Route exact path="/new" component={PostList} />
          <Route exact path="/top" component={PostList} />
          <Route exact path="/top/:id" component={PostList} />
          <Route exact path="/best" component={PostList} />
          <Route exact path="/rising" component={PostList} />
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/post/:id" component={PostPage} />
          <Route exact path="/r/:subReddit/post/:id" component={PostPage} />
          <Route exact path="/notFound" component={NotFound} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/saved" component={PostList} />
          <Route exact path="/upvoted" component={PostList} />
          <Route exact path="/notifications" component={PostList} />
          <Route exact path="/messages" component={PostList} />
          <Route exact path="/me" component={PostList} />
          <Route exact path="/login" component={Login} />

          <Redirect to="/notFound" />
        </Switch>
      </AppDiv>
      </ThemeProvider>
    </Router>
  );
}

export default App;

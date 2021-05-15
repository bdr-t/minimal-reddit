import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";
import { fetchPosts, remove, selectAllPosts } from "../redux/slices/postsSlice";
import Notifications from "./Notifications";
import Messages from "./Messages";
import MyProfile from "./MyProfile";


const LoggedIn = ({ match, username, user }) => {
  const path = match ? match.url : "/best";
  const { subReddit } = useParams();

  const observer = useRef(path);

  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const token = useSelector((state) => state.authorization.token);
  const after = useSelector((state) => state.posts.after);
  const ids = useSelector((state) => state.posts.ids);
  const first = useSelector((state) => state.posts.first);

  let link;
  
  if (path === "/saved") {
    link = `https://oauth.reddit.com/user/${username}/saved`;
  } else if (path === "/upvoted") {
    link = `https://oauth.reddit.com/user/${username}/upvoted`;
  } else if (path === "/posts") {
    link = `https://oauth.reddit.com/user/${username}/submitted`;
  } else if (user){
    link = `https://oauth.reddit.com/user/${user}/overview`
  } else if(path.includes('/top/')){
    if(match.params.subReddit){
    link = `https://oauth.reddit.com/r/${match.params.subReddit}/top?t=${match.params.id}&limit=10`
    }else{
      link = `https://oauth.reddit.com/top?t=${match.params.id}&limit=10`;
    }
    console.log(link)
  }
  
  else {
    link = `https://oauth.reddit.com${path}?limit=10`;
  }

  

  useEffect(() => {
    if (!(observer.current === path)) {
      console.log("removing");
      dispatch(remove(ids));
    }
    console.log(observer)
  }, [path]);

  useEffect(() => {
    setTimeout(()=>{
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      window.scrollTo({
        top: parseInt(scrollPosition),
        left: 0,
        behavior: 'smooth'
      });
      sessionStorage.setItem("scrollPosition", 0);
    }, 500)

    if (first) {
      if (path !== "/me" && path !== "/notifications" && path !== "/messages") {
        const config = {
          link,
          token,
        };
        dispatch(fetchPosts(config));
        observer.current = path;
      }
    } else if (!(observer.current === path)) {
      const config = {
        link,
        token,
      };
      dispatch(fetchPosts(config));
      observer.current = path;
    }
  }, [path, subReddit]);

  window.onscroll = function (ev) {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight * 0.9
    ) {
      if (postStatus === "succeeded") {
        const config = {
          link: `https://oauth.reddit.com${path}?limit=10&after=${after}`,
          token,
          afterPosts: after,
        };
        dispatch(fetchPosts(config));
      }
    }
  };

  const posts = useSelector(selectAllPosts);


  let content;

  if (path === "/notifications") {
    content = <Notifications />;
  } else if (path === "/messages") {
    content = <Messages />;
  } else if (path === "/me") {
    content = <MyProfile name={username} />;
  } else {
    content = posts.map((post) => (
      <Post key={post.id} postId={post.id} token={token} />
    ));
  }


  if (error) {
    <div className="err">{error}</div>;
  }

  // if (postStatus === "loading") {
  //   content = <div className="loader">Loading...</div>;
  // } else if (postStatus === "succeeded") {
  //   content = posts.map((post) => (
  //     <Post key={post.id} postId={post.id} token={token} />
  //   ));
  // } else if (postStatus === "error") {
  //   content = <div>{error}</div>;
  // }

  return <div className="posts-list">{content}</div>;
};

export default LoggedIn;

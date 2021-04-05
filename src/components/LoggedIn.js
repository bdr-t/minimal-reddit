import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";

import { fetchPosts, remove, selectAllPosts } from "../redux/slices/postsSlice";
import { Sorting, SortingElement } from "../styledComponents";
import Sort from "./sort";

const LoggedIn = ({ match }) => {
  const path = match ? match.url : "/best";
  const { subReddit } = useParams();

  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const token = useSelector((state) => state.authorization.token);
  const after = useSelector((state) => state.posts.after);
  const ids = useSelector((state) => state.posts.ids);
  const prevPath = useSelector((state) => state.posts.prevPath)



  useEffect(() => {
    let config 
    if (postStatus === "idle") {
      const config = {
        path,
        token,
        afterPosts: after,
      };
      dispatch(fetchPosts(config));
    }
    else if(prevPath === ''){
      let doNothing = true
    }
    else if (!(prevPath === path)) {
      console.log('option 2')
      dispatch(remove(ids));
      config = {
        path,
        token,
        afterPosts: "",
      }
    dispatch(fetchPosts(config));

    }
    
  }, [path, subReddit]);

  window.onscroll = function (ev) {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight * 0.9
    ) {
      if (postStatus === "succeeded") {
        const config = {
          path,
          token,
          afterPosts: after,
        };
        dispatch(fetchPosts(config));
      }
    }
  };

  const posts = useSelector(selectAllPosts);

  let content;

  content = posts.map((post) => (
    <Post key={post.id} postId={post.id} token={token} />
  ));
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

  return (
    <div className="posts-list">


      {content}
    </div>
  );
};

export default LoggedIn;

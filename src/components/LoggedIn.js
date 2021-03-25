import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Post from "./Post";

import { fetchPosts, remove, selectAllPosts } from "../redux/slices/postsSlice";

const LoggedIn = ({ match }) => {
  const path = match ? match.url : "/best";
  let secondUseEffect = false

  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const token = useSelector((state) => state.authorization.token);
  const after = useSelector((state) => state.posts.after);
  const ids = useSelector((sate) => sate.posts.ids);


  useEffect(() => {
    if (postStatus === "idle" ) {
      const config = {
        path,
        token,
        afterPosts: after,
      };
      dispatch(fetchPosts(config));
    }
  }, []);

  useEffect(() => {
    if (after) {
      dispatch(remove(ids));
      const config = {
        path,
        token,
        afterPosts: after,
      };
      dispatch(fetchPosts(config));
    }
  }, [path]);

  window.onscroll = function (ev) {
    if (
      window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight * 0.9
    ) {
      if (postStatus === "succeeded") {
        console.log("a ver");
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

  return <section className="posts-list">{content}</section>;
};

export default LoggedIn;

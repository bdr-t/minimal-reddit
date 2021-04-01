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
  const ids = useSelector((sate) => sate.posts.ids);

  useEffect(() => {
    if (postStatus === "idle") {
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
        afterPosts: "",
      };
      dispatch(fetchPosts(config));
    }
  }, [path, subReddit]);

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

  return (
    <div className="posts-list">

        <Sort/>

      {content}
    </div>
  );
};

export default LoggedIn;

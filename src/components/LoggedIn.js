import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Post from './Post'


import {
  fetchPosts,
  selectAllPosts,
} from "../redux/slices/postsSlice";






const PostList = ({match}) => {
  

  let linkHome = `https://www.reddit.com/.json`
  let linkSub = `https://www.reddit.com/${match ? match.url : null }/.json`
  let link = match ? linkSub : linkHome


  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle" ) {
      dispatch(fetchPosts(link));
    }
  }, [postStatus, dispatch, link]);


  const posts = useSelector(selectAllPosts);

  let content;

  if (postStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postStatus === "succeeded") {
    content = posts.map((post) => (
      <Post key={post.id} postId={post.id} />
    ));
  } else if (postStatus === "error") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      {content}
    </section>
  );
};

export default PostList;

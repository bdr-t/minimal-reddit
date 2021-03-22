import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Post from './Post'



import {
  fetchPosts,
  selectAllPosts,
} from "../redux/slices/postsSlice";





const PostList = ({match}) => {
  const path = match ? match.url : '/best'

  const link = 'https://oauth.reddit.com' + path

  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const token = useSelector((state) => state.authorization.token);


  

  useEffect(() => {
    if (postStatus === "idle" ) {
      const config = {
        link,
        token
      }
      dispatch(fetchPosts(config));
    }
  }, [postStatus, dispatch, link, token]);


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

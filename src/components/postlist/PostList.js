import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PostExcerpt from '../PostExcerpt'

import {
  fetchPosts,
  selectAllPosts,
} from "../../redux/slices/postsSlice";

import Sort from "../sort";




const PostList = ({match}) => {
  const [sort, setSort] = useState('hot')
 
  let linkHome = `https://www.reddit.com/${sort}/.json`
  let linkSub = `https://www.reddit.com/${match ? match.url : null }/${sort}/.json`
  let link = match ? linkSub : linkHome


  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle" ) {
      dispatch(fetchPosts(link));
    }
  }, [postStatus, dispatch, link, sort]);

  useEffect(()=>{
    dispatch(fetchPosts(link))
  },[link, dispatch])

  const posts = useSelector(selectAllPosts);

  let content;

  if (postStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postStatus === "succeeded") {
    content = posts.map((post) => (
      <PostExcerpt key={post.id} postId={post.id} />
    ));
  } else if (postStatus === "error") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <Sort/>
      {content}
    </section>
  );
};

export default PostList;

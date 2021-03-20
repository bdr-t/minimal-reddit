import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import Post from './Post'
import useFetchPosts from './useFetchPosts'


import {
  fetchPosts,
  selectAllPosts,
} from "../redux/slices/postsSlice";

import Sort from "./sort";





const PostList = ({match}) => {

    
    
  let path = match ? match.params.subReddit : null
  

  let linkHome = `https://www.reddit.com/.json`
  let linkSub = `https://www.reddit.com${match ? match.url : null }/.json`
  let link = match ? linkSub : linkHome

  const {posts, status, error} = useFetchPosts(link)

  console.log(posts)

//   const dispatch = useDispatch();

//   const postStatus = useSelector((state) => state.posts.status);
//   const error = useSelector((state) => state.posts.error);


  let content;

  if (status === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (status === "succeeded") {
    content = posts.map((post) => (
      <Post key={post.id} postNotLeggedIn={post} />
    ));
  } else if (status === "error") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <Sort url={path}/>
      {content}
    </section>
  );
};

export default PostList;

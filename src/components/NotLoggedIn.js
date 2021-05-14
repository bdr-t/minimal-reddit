import Post from "./Post";
import {useEffect} from 'react'
import useFetchPosts from "../actions/useFetchPosts";

const PostList = ({ match, user }) => {
  let linkHome = `https://www.reddit.com/.json`;
  let linkSub = `https://www.reddit.com${match ? match.url : null}/.json`;
  let link = match ? linkSub : linkHome;

  if(user){
    link = `https://www.reddit.com/user/${user}.json` 
  }

  const { posts, status, error } = useFetchPosts(link);

  let content;

  useEffect(() => {
      setTimeout(()=>{
        console.log('set timoiut on useeffect')
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        window.scrollTo({
          top: parseInt(scrollPosition),
          left: 0,
          behavior: 'smooth'
        });
        sessionStorage.setItem("scrollPosition", 0);
      }, 500)
  }, [])

  if (status === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (status === "succeeded") {
    content = posts.map((post) => (
      <Post key={post.id} postNotLeggedIn={post} />
    ));
  } else if (status === "error") {
    content = <div>{error}</div>;
  }

  return <section className="posts-list">{content}</section>;
};

export default PostList;

import Post from "./Post";
import useFetchPosts from "./useFetchPosts";

const PostList = ({ match }) => {
  let linkHome = `https://www.reddit.com/.json`;
  let linkSub = `https://www.reddit.com${match ? match.url : null}/.json`;
  let link = match ? linkSub : linkHome;

  const { posts, status, error } = useFetchPosts(link);

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

  return <section className="posts-list">{content}</section>;
};

export default PostList;

import save from "../../images/save.svg";
import world from "../../images/world.svg";
import upvote from "../../images/upvote.svg";
import downvote from "../../images/downvote.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";

import {
  fetchSubRedditPosts,
  selectAllPosts,
  selectPostById,
} from "../../redux/slices/subPostsSlice";

const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  let img;
  let outsideLink;
  let video;

  if (post.url.includes("jpg") || post.url.includes("png")) {
    img = <img className="content-img" src={post.url} alt="" />;
  }

  if (!post.url.includes("redd")) {
    outsideLink = <a href={post.url}>{post.url}</a>;
  }

  if (post.is_video) {
    video = (
      <ReactHlsPlayer
      url={"https://proxy-bt.herokuapp.com/" + post.media.reddit_video.hls_url}
      autoplay={false}
      controls={true}
      width="300px"
      height="auto"
    />
    );
  }

  return (
    <article className="post-excerpt" key={post.id}>
      <div className="content-container">
        <h2 className="content-title">
          {post.title}
          <img className="save-icon icon" src={save} alt="" />
        </h2>

        <p className="content-body">
          {post.selftext}
          {img}
          {outsideLink}
        </p>
        {video}

        <div className="content-footer">
          <div className="upvotes">
            <img className="icon" src={upvote} alt="" />
            <p>{post.ups}</p>
            <img className="icon" src={downvote} alt="" />
          </div>
          <div className="subreddit">
            <p className="subreddit-text">r/{post.subreddit}</p>
            <img className="icon-world icon" src={world} alt="" />
          </div>
        </div>
      </div>
    </article>
  );
};

const SubReddit = ({ match }) => {
  const { subReddit } = match.params;
  console.log(subReddit)

  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.subredditPosts.status);
  const error = useSelector((state) => state.subredditPosts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchSubRedditPosts(subReddit));
    }
  }, [postStatus, dispatch, subReddit]);
  

  const posts = useSelector(selectAllPosts);
  console.log(posts)

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


  console.log(postStatus)

  return (
    <section className="posts-list">
      {content}
    </section>
  );
};

export default SubReddit;

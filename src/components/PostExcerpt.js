import save from "../images/save.svg";
import world from "../images/world.svg";
import upvote from "../images/upvote.svg";
import downvote from "../images/downvote.svg";
import {useSelector } from "react-redux";

import ReactHlsPlayer from "react-hls-player";

import {
  selectPostById,
} from "../redux/slices/postsSlice";


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


export default PostExcerpt
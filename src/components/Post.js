import { useSelector } from "react-redux";
import { selectPostById } from "../redux/slices/postsSlice";
import he from "he";
import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";
import { fromUnixTime, formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router-dom";
import { useState} from "react";
import savePost from "../actions/savePost"

import {
  Comments,
  UpvotesNum,
  Container,
  Title,
  Enlace,
  Footer,
  Upvotes,
  ArrowDown,
  Text,
  ArrowUp,
  SubReddit,
  ContentImage,
  SubTitle,
  Video,
  SaveIcon,
} from "../styledComponents";
import vote from "../actions/vote";

const Post = ({ postId, postNotLeggedIn, token }) => {
  let post = useSelector((state) => selectPostById(state, postId));
  if (postNotLeggedIn) {
    post = postNotLeggedIn;
  }

  let content;
  const [votes, setVotes] = useState(post.ups - post.downs);
  const [dir, setDir] = useState(0);
  if (post.url.includes("jpg") || post.url.includes("png")) {
    content = <ContentImage src={post.url} alt="" />;
  } else if (!post.url.includes("redd")) {
    content = (
      <Text>
        <Enlace target="_blank" href={post.url}>
          {post.url}
        </Enlace>
      </Text>
    );
  } else if (post.url.includes("gif")) {
    content = (
      <Video
        url={"https://proxy-bt.herokuapp.com/" + post.url}
        autoplay={true}
        loop={true}
        controls={true}
        width="100%"
      />
    );
  } else if (post.is_video) {
    content = (
      <Video
        url={
          "https://proxy-bt.herokuapp.com/" + post.media.reddit_video.hls_url
        }
        autoplay={false}
        controls={true}
      />
    );
  } else if (post.selftext) {
    const text = he.decode(post.selftext);
    const html = sanitizeHtml(text);

    content = <Text>{parse(html)}</Text>;
  }

  const date = fromUnixTime(post.created);
  const timePeriod = formatDistanceToNowStrict(date);

  return (
    <Container>
      <Title>
        {post.title}
        <SaveIcon onClick={()=>savePost(post.post_id, token)}/>
      </Title>
      <SubTitle>
        Posted by <Link to={`u/${post.author}`}>u/{post.author}</Link>{" "}
        {timePeriod} ago
      </SubTitle>
      {content}
      <Footer>
        <div style={{ display: "flex", borderTop: "1px solid #65676b" }}>
          <Upvotes>
            <ArrowDown
              onClick={() => {
                if (dir === 0) {
                  vote(-1, post.post_id, token);
                  setDir(-1);
                  setVotes(votes - 1);
                } else {
                  vote(0, post.post_id, token);
                  setDir(0);
                  setVotes(votes + 1);
                }
              }}
            />
            <UpvotesNum>{votes}</UpvotesNum>
            <ArrowUp
              onClick={() => {
                if (dir === 0) {
                  vote(1, post.post_id, token);
                  setDir(1);
                  setVotes(votes + 1);
                } else {
                  vote(0, post.post_id, token);
                  setDir(0);
                  setVotes(votes - 1);
                }
              }}
            />
          </Upvotes>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid #65676b" }}>
          <Comments>{post.comments} Comments</Comments>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid #65676b" }}>
          <SubReddit href={`/r/${post.subreddit}`}>
            r/{post.subreddit}
          </SubReddit>
        </div>
      </Footer>
    </Container>
  );
};

export default Post;

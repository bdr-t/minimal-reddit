
import { useSelector } from "react-redux";
import { selectPostById } from "../redux/slices/postsSlice";
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
} from "./styledTextContainer";

const ImageContainer = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  let content;

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
  } else {
    content = <Text>{post.selftext}</Text>;
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <SubTitle>Posted by me 9 hours ago</SubTitle>
      {content}
      <Footer>
        <div style={{display:'flex', borderTop: '1px solid #65676b'}}>
          <Upvotes>
            <ArrowDown />
            <UpvotesNum>{post.ups}</UpvotesNum>
            <ArrowUp />
          </Upvotes>
        </div>
        <div style={{display:'flex', borderTop: '1px solid #65676b'}}>
        <Comments>Comments</Comments>
        </div>
        <div style={{display:'flex', borderTop: '1px solid #65676b'}}>
          <SubReddit href={`/r/${post.subreddit}`}>
            <SubReddit>r/{post.subreddit}</SubReddit>
          </SubReddit>
        </div>
      </Footer>
    </Container>
  );
};

export default ImageContainer;

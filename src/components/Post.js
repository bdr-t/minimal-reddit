import { useState } from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "../redux/slices/postsSlice";
import  ReactHlsPlayer from 'react-hls-player'
import {
  Container,
  Title,
  Content,
  Footer,
  Upvotes,
  ArrowDown,
  Text,
  ArrowUp,
  Open,
  SubReddit,
  NailContainer,
  Thumbnail,
  ContentImage,
  ContentContainer,
} from "./styledTextContainer";

const ImageContainer = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  const [visible, setVisible] = useState(true);
  // const [img, setImg] = useState('')
  // const [link, setLink] = useState('')
  // const [video, setVideo] = useState('')

  const toggleOpen = () => {
    setVisible(!visible);
  };

  let thumbnail
  let content
  

  if (post.url.includes("jpg") || post.url.includes("png")) {
    thumbnail = post.thumbnail
    content = <ContentImage src={post.url} alt="" />
  } else if (!post.url.includes("redd")) {
    thumbnail = 'https://i.imgur.com/GwlLmUe.png'
    content = <a href={post.url}>{post.url}</a>;
  } else if (post.is_video) {
    thumbnail = post.thumbnail
    content = (
      <ReactHlsPlayer
      url={"https://proxy-bt.herokuapp.com/" + post.media.reddit_video.hls_url}
      autoplay={false}
      controls={true}
      width="300px"
      height="auto"
    />
    );
  } else if (post.url.includes("gif")){
    thumbnail = post.url
    content = (<ReactHlsPlayer
      url={post.url}
      autoplay={false}
      controls={true}
      width="300px"
      height="auto"
    />)
  } else{
    thumbnail = 'https://i.imgur.com/rHpDibs.png'
    content = 'haha'
  }
 

  

  return (
    <Container>
      <NailContainer visible={!visible} >
        <Thumbnail visible={!visible} src={thumbnail} alt="" />
      </NailContainer>

      <ContentContainer visible={visible}>
        <Title>{post.title}</Title>
        <Content visible={visible}>
          {content}
        </Content>
        <Footer>
          <Upvotes>
            <ArrowDown />
            <Text>{post.ups}</Text>
            <ArrowUp />
          </Upvotes>
          <Open onClick={toggleOpen} />
          <SubReddit href={`/r/${post.subreddit}`}>
            r/{post.subreddit}
          </SubReddit>
        </Footer>
        
      </ContentContainer>
    </Container>
  );
};

export default ImageContainer;

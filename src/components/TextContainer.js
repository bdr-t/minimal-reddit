
import { useState } from "react";
import {useSelector} from 'react-redux'
import {
    selectPostById,
  } from '../redux/slices/postsSlice';
import {Container, Title, Content, Footer, Upvotes, ArrowDown, Text, ArrowUp, Open, SubReddit} from './styledTextContainer'

const TextContainer = ({postId}) => {
    const post = useSelector((state) => selectPostById(state, postId));
    const [visible, setVisible] = useState(true)
  
  const toggleOpen = () => {
    setVisible(!visible);
  }
  console.log(visible)

  

  return (
    <Container>
      <Title>{post.title}</Title>
      <Content visible={visible}>{post.selftext}</Content>
      <Footer>
        <Upvotes>
          <ArrowDown />
          <Text>{post.ups}</Text>
          <ArrowUp />
        </Upvotes>
        <Open onClick={toggleOpen}/>
        <SubReddit href={`/r/${post.subreddit}`}>r/{post.subreddit}</SubReddit>
      </Footer>
    </Container>
  );
}
 
export default TextContainer;
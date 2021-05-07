import { useSelector } from 'react-redux';
import { selectPostById } from '../redux/slices/postsSlice';
import { useState } from 'react';
import savePost from '../actions/savePost';
import unSavePost from '../actions/unSavePost';
import axios from 'axios';

import {
  Comments as NumComments,
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
  Video,
  SaveIcon,
  Linked,
} from '../styledComponents';
import vote from '../actions/vote';
import TimeAgo from './TimeAgo';
import parseHtml from '../actions/parseHTML';

const Post = ({ postId, postNotLeggedIn, token }) => {
  const authorization = useSelector((state) => state.authorization.authorization);
  let post = useSelector((state) => selectPostById(state, postId));
  if (postNotLeggedIn) {
    post = postNotLeggedIn;
  }

  let content;
  const [icon, setIcon] = useState('https://svgshare.com/i/V_c.svg');
  const [votes, setVotes] = useState(post.ups - post.downs);
  const [dir, setDir] = useState(0);
  const [focus, setFocus] = useState(post.likes);
  const [saved, setSaved] = useState(post.saved);

  try {
    if (post.url.includes('jpg') || post.url.includes('png')) {
      content = <ContentImage src={post.url} alt="" />;
    } else if (!post.url.includes('redd')) {
      content = (
        <Text>
          <Enlace target="_blank" href={post.url}>
            {post.url}
          </Enlace>
        </Text>
      );
    } else if (post.url.includes('gif')) {
      content = (
        <Video
          url={'https://proxy-bt.herokuapp.com/' + post.url}
          autoplay={true}
          loop={true}
          controls={true}
          width="100%"
        />
      );
    } else if (post.is_video) {
      content = (
        <Video
          url={'https://proxy-bt.herokuapp.com/' + post.media.reddit_video.hls_url}
          autoplay={false}
          controls={true}
        />
      );
    } else if (post.selftext) {
      content = <Text>{parseHtml(post.selftext)}</Text>;
    }
  } catch (err) {}

  async function getIcon() {
    const url = await axios(`https://www.reddit.com/r/${post.subreddit}/about.json`).then(
      (res) => res.data.data.icon_img
    );
    if (url) {
      setIcon(url);
    }
  }

  getIcon();

  return (
    <>
      {post.post_id.includes('t3') && (
        <Linked to={`/r/${post.subreddit}/post/${post.id}`}>
          <Container>
            <div
              className="flex"
              style={{
                display: 'flex',
                gap: '0.5em',
                padding: '0.5em 0.5em 0.5em 0.5em',
              }}
            >
              <div className="flex-author">
                <Title>
                  {post.title}
                  <SaveIcon
                    saved={saved === true ? 1 : 0}
                    onClick={() => {
                      if (authorization) {
                        if (saved) {
                          unSavePost(post.post_id, token);
                          setSaved(false);
                        } else {
                          savePost(post.post_id, token);
                          setSaved(true);
                        }
                      }
                    }}
                  />
                </Title>
                <TimeAgo needsPadding={true} created={post.created} author={post.author} />
              </div>
            </div>
            {content}
            <Footer>
              <div style={{ display: 'flex', borderTop: '1px solid #65676b' }}>
                <Upvotes>
                  <ArrowDown
                    focus={focus === false ? 0 : 1}
                    onClick={() => {
                      if (authorization) {
                        if (dir === 0) {
                          vote(-1, post.post_id, token);
                          setDir(-1);
                          setVotes(votes - 1);
                          setFocus(false);
                        } else if (dir === -1) {
                          vote(0, post.post_id, token);
                          setDir(0);
                          setVotes(votes + 1);
                          setFocus(null);
                        } else if (dir === 1) {
                          vote(-1, post.post_id, token);
                          setDir(-1);
                          setVotes(votes - 2);
                          setFocus(false);
                        }
                      }
                    }}
                  />
                  <UpvotesNum>{votes}</UpvotesNum>
                  <ArrowUp
                    focus={focus === true ? 1 : 2}
                    onClick={() => {
                      if (authorization) {
                        if (dir === 0) {
                          vote(1, post.post_id, token);
                          setDir(1);
                          setVotes(votes + 1);
                          setFocus(true);
                        } else if (dir === -1) {
                          vote(1, post.post_id, token);
                          setDir(1);
                          setVotes(votes + 2);
                          setFocus(true);
                        } else if (dir === 1) {
                          vote(0, post.post_id, token);
                          setDir(0);
                          setVotes(votes - 1);
                          setFocus(null);
                        }
                      }
                    }}
                  />
                </Upvotes>
              </div>
              <div style={{ display: 'flex', borderTop: '1px solid #65676b' }}>
                <NumComments>
                  <Linked to={`/r/${post.subreddit}/post/${post.id}`}>
                    <NumComments>{post.comments} Comments</NumComments>
                  </Linked>
                </NumComments>
              </div>
              <div style={{ display: 'flex', borderTop: '1px solid #65676b' }}>
                <SubReddit>
                  <img src={icon} width="20px" style={{ borderRadius: '50%' }} alt="" srcset="" />
                  <Linked style={{ fontWeight: 600 }} to={`/r/${post.subreddit}/`}>
                    r/{post.subreddit}
                  </Linked>
                </SubReddit>
              </div>
            </Footer>
          </Container>
        </Linked>
      )}
    </>
  );
};

export default Post;

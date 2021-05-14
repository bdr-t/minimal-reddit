import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import vote from '../actions/vote';
import {
  CommentImageDiv,
  CommentImg,
  HeaderContainer,
  RepliesDiv,
  RepliesP,
  Text,
  Username,
  CommentDiv,
  CommentUpvoteContainer,
  CommentUpvote,
  ArrowDown,
  ArrowUp,
} from '../styledComponents';
import TimeAgo from './TimeAgo';
import parseHtml from '../actions/parseHTML';
import { CommentContainer } from '../styledComponents';

const Comment = ({
  fullComment,
  author,
  id,
  body,
  replies,
  created,
  permalink,
  ups,
  downs,
  likes,
}) => {
  const [votes, setVotes] = useState(ups - downs);
  const [dir, setDir] = useState(0);
  const [focus, setFocus] = useState(likes);
  const authorization = useSelector((state) => state.authorization.authorization);
  const token = useSelector((state) => state.authorization.token);

  const File = ({ body, replies, author } = data) => {
    const [icon, setIcon] = useState(
      'https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png'
    );

    const [showChildren, setShowChildren] = useState(false);
    const handleClick = useCallback(() => {
      setShowChildren(!showChildren);
    }, [showChildren, setShowChildren]);

    let children;
    if (replies) {
      children = replies.data.children;
    }

    useEffect(() => {
      async function getIcon() {
        const url = await axios(`https://www.reddit.com/user/${author}/about/.json`).then(
          (res) => res.data.data.icon_img
        );
        try {
          if (url.endsWith('png')) {
            setIcon(url);
          } else {
            const remove = url.split('?').pop();
            const icon = url.replace(remove, '');
            setIcon(icon);
          }
        } catch (err) {}
      }
      getIcon();
    });

    body = <Text style={{ paddingLeft: '0' }}>{parseHtml(body)}</Text>;

    return (
      <CommentContainer>
        <div>
          <HeaderContainer>
            <CommentImageDiv>
              <CommentImg src={icon} />
            </CommentImageDiv>
            <div>
              <Username style={{ paddingLeft: 0 }}>{author}</Username>
              <TimeAgo created={created} author={author} />
            </div>
          </HeaderContainer>
          <CommentUpvoteContainer>
            <CommentUpvote>
              <ArrowUp
                focus={focus === true ? 1 : 2}
                onClick={() => {
                  if (authorization) {
                    if (dir === 0) {
                      vote(1, id, token);
                      setDir(1);
                      setVotes(votes + 1);
                      setFocus(true);
                    } else if (dir === -1) {
                      vote(1, id, token);
                      setDir(1);
                      setVotes(votes + 2);
                      setFocus(true);
                    } else if (dir === 1) {
                      vote(0, id, token);
                      setDir(0);
                      setVotes(votes - 1);
                      setFocus(null);
                    }
                  }
                }}
              />
              <p style={{ textAlign: 'center' }}>{votes}</p>
              <ArrowDown
                focus={focus === false ? 0 : 1}
                onClick={() => {
                  if (authorization) {
                    if (dir === 0) {
                      vote(-1, id, token);
                      setDir(-1);
                      setVotes(votes - 1);
                      setFocus(false);
                    } else if (dir === -1) {
                      vote(0, id, token);
                      setDir(0);
                      setVotes(votes + 1);
                      setFocus(null);
                    } else if (dir === 1) {
                      vote(-1, id, token);
                      setDir(-1);
                      setVotes(votes - 2);
                      setFocus(false);
                    }
                  }
                }}
              />
            </CommentUpvote>
            {body}
          </CommentUpvoteContainer>
          {replies && (
            <RepliesP onClick={handleClick}>{replies.data.children.length} replies</RepliesP>
          )}
        </div>
        <RepliesDiv>
          {showChildren && (children ?? []).map((data) => <File {...data.data} />)}
        </RepliesDiv>
      </CommentContainer>
    );
  };

  body = <Text style={{ width: '75%' }}>{parseHtml(body)}</Text>;

  let data = fullComment;

  return (
    <CommentDiv>
      <File {...data} />
    </CommentDiv>
  );
};

export default Comment;

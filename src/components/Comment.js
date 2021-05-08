import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  CommentImageDiv,
  CommentImg,
  HeaderContainer,
  RepliesDiv,
  RepliesP,
  Text,
  Username,
  CommentDiv,
} from "../styledComponents";
import TimeAgo from "./TimeAgo";
import parseHtml from "../actions/parseHTML";
import { CommentContainer } from "../styledComponents";

const Comment = ({
  fullComment,
  author,
  id,
  body,
  replies,
  created,
  permalink,
}) => {
  const File = ({ body, replies, author } = data) => {
    const [icon, setIcon] = useState(
      "https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png"
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
        const url = await axios(
          `https://www.reddit.com/user/${author}/about/.json`
        ).then((res) => res.data.data.icon_img);
        try{
          if (url.endsWith("png")) {
            setIcon(url);
          } else {
            const remove = url.split("?").pop();
            const icon = url.replace(remove, "");
            setIcon(icon);
          }
        } catch(err){
          
        }
        
      }
      getIcon();
    });

    body = <Text>{parseHtml(body)}</Text>;

    return (
      <CommentContainer>
        <div>
          <HeaderContainer>
            <CommentImageDiv>
              <CommentImg src={icon} />
            </CommentImageDiv>
            <div>

            
            <Username style={{paddingLeft: 0,}}>{author}</Username>
            <TimeAgo created={created} author={author} />
            </div>
          </HeaderContainer>
          {body}
          {replies && (
            <RepliesP onClick={handleClick}>
              {replies.data.children.length} replies
            </RepliesP>
          )}
        </div>
        <RepliesDiv>
          {showChildren &&
            (children ?? []).map((data) => <File {...data.data} />)}
        </RepliesDiv>
      </CommentContainer>
    );
  };

  body = <Text style={{width:'75%'}}>{parseHtml(body)}</Text>;

  let data = fullComment;

  return (
    <CommentDiv>
      <File {...data} />
    </CommentDiv>
  );
};

export default Comment;

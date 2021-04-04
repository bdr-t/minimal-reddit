import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Text } from "../styledComponents";
import TimeAgo from "./TimeAgo";
import parseHtml from "../actions/parseHTML";
import useComments from "../actions/useComments";
import {CommentContainer} from '../styledComponents'

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
        if (url.endsWith("png")) {
          setIcon(url);
        } else {
          const remove = url.split("?").pop();
          const icon = url.replace(remove, "");
          setIcon(icon);
        }
      }
      getIcon();
    });

    return (
      <CommentContainer>
        <div>
          <div
            className="flex"
            style={{
              display: "flex",
              gap: "0.5em",
              padding: "0.5em 1em 0.5em 1em",
            }}
          >
            <div
              className="img"
              style={{ width: "35px", display: "grid", placeContent: "center" }}
            >
              <img
                src={icon}
                width="30px"
                height="30px"
                style={{ borderRadius: "50%", margin: "auto" }}
                alt=""
              />
            </div>

            <div className="flex-author">{author}</div>
            <TimeAgo
              needsPadding={true}
              created={created}
              author={author}
            />
          </div>
          {body}
          {replies && (
            <p
              onClick={handleClick}
              style={{
                cursor: "pointer",
                fontFamily: "Segoe UI SemiBold",
                color: "#65676b",
                textAlign: "center",
                fontSize: "15px",
                paddingBottom: "0.5em",
              }}
            >
              {replies.data.children.length} replies
            </p>
          )}
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            left: 25,
            borderLeft: "1px solid",
            paddingLeft: 15,
          }}
        >
          {showChildren &&
            (children ?? []).map((data) => <File {...data.data} />)}
        </div>
      </CommentContainer>
    );
  };

  body = <Text>{parseHtml(body)}</Text>;

  let data = fullComment;

  return <File {...data} />;
};

export default Comment;

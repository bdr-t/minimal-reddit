import { useEffect, useState } from "react";
import axios from "axios";
import { Text} from "../styledComponents";
import TimeAgo from "./TimeAgo";
import parseHtml from "../actions/parseHTML";

const Comment = ({ author, id, body, replies, created }) => {
  const [icon, setIcon] = useState(
    "https://www.redditstatic.com/avatars/avatar_default_05_7193FF.png"
  );

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




  body = <Text>{parseHtml(body)}</Text>;

  return (
    <div style={{ borderBottom: "1px solid #E9EAED" }}>
      <div
        className="flex"
        style={{
          display: "flex",
          gap: "0.5em",
          padding: "0.5em 1em 0.5em 1em",
        }}
      >
        <div className="img" style={{width: '35px', display:'grid', placeContent:'center'}}>
          <img
            src={icon}
            width="30px"
            height="30px"
            style={{ borderRadius: "50%", margin: "auto" }}
            alt=""
          />
        </div>

        <div className="flex-author">
          {author}
          <TimeAgo created={created} author={author}/>
        </div>
      </div>
      {body}
      {replies && (
        <p
          style={{
            fontFamily: "Segoe UI SemiBold",
            color: "#65676b",
            textAlign: "center",
            fontSize: "15px",
            paddingBottom: "0.5em",
          }}
        >
          {replies.children.length} replies
        </p>
      )}
    </div>
  );
};

export default Comment;

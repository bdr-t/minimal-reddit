import { useEffect, useState } from "react";
import axios from "axios";

const Comment = ({ author, id, body }) => {
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
        console.log(url);
        const remove = url.split("?").pop();
        console.log(remove);
        const icon = url.replace(remove, "");
        console.log(icon);
        setIcon(icon);
      }
    }
    getIcon();
  });

  console.log(icon);

  return (
    <div>
      <img src={icon} width='30px' height='30px' alt="" />
      {author}
      {body}
    </div>
  );
};

export default Comment;

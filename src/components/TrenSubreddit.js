import { useEffect, useState } from "react";
import { Linked, JoinBtn } from "../styledComponents";
import axios from "axios";
import { useSelector } from "react-redux";
import suscribe from "../actions/suscribe";

const TrenSubreddit = ({ name }) => {
  const authorization = useSelector((state) => state.authorization.authorization);
  const [subReddit, setSubreddit] = useState();
  const [icon, setIcon] = useState("https://i.imgur.com/Td33Ac4.png");
  const [isSubscriber, setIsSubscriber] = useState(false);
  const token = useSelector((state) => state.authorization.token);



  useEffect(() => {
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const getSubreddit = async () => {
        const data = await axios
          .get(`https://oauth.reddit.com/r/${name}/about.json`, config)
          .then((res) => res.data.data);
        setSubreddit(data);
        setIsSubscriber(data.user_is_subscriber);
        if (data) {
          let url = data.community_icon;
          if (url !== "") {
            const remove = url.split("?").pop();
            const icon = url.replace(remove, "");
            setIcon(icon);
          }
        }
      };
      getSubreddit();
    }
  }, [token]);

  useEffect(() => {
    if (!authorization) {
      const getSubreddit = async () => {
        const data = await axios
          .get(`https://www.reddit.com/r/${name}/about.json`)
          .then((res) => res.data.data);
        setSubreddit(data);
        console.log(data)
        setIsSubscriber(data.user_is_subscriber);
        if (data) {
          let url = data.community_icon;
          if (url !== "") {
            const remove = url.split("?").pop();
            const icon = url.replace(remove, "");
            setIcon(icon);
          }
        }
      };
      getSubreddit();
    }
  }, [authorization]);

  let subRedditName;

  if (subReddit) {
    subRedditName = subReddit.display_name_prefixed;
  }

  function handleClick() {
    if(authorization){
      if (isSubscriber) {
      suscribe("unsub", subRedditName, token);
      setIsSubscriber(false);
    } else {
      suscribe("sub", subRedditName, token);
      setIsSubscriber(true);
    }
    }

    
  }

  return (
    <div style={{ display: "flex", gap: "1em", padding: "0.5em 1em" }}>
      <img src={icon} style={{ borderRadius: "50%" }} width="40px" alt="" />
      <div className="a">
        <Linked style={{ fontWeight: 700 }} to={`/${subRedditName}/`}>
          {subRedditName}
        </Linked>
        <p>{subReddit && subReddit.subscribers}</p>
      </div>
      <JoinBtn onClick={() => handleClick()}>
        {isSubscriber ? "leave" : "join"}
      </JoinBtn>
    </div>
  );
};

export default TrenSubreddit;

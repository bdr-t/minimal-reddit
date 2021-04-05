import { useEffect, useState } from "react";
import {Linked, JoinBtn} from '../styledComponents'
import axios from "axios";

const TrenSubreddit = ({ name }) => {
  const [subReddit, setSubreddit] = useState();
  const [icon, setIcon] = useState("https://i.imgur.com/Td33Ac4.png");

  useEffect(() => {
    const getSubreddit = async () => {
      const data = await axios
        .get(`https://www.reddit.com/r/${name}/about.json`)
        .then((res) => res.data.data);
      console.log(data);
      setSubreddit(data);
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
  }, []);

  let subRedditName

  if(subReddit){
    subRedditName = subReddit.display_name_prefixed
  }
  

  return (
    <div style={{display:'flex', gap:'1em', padding:'0.5em 1em'}}>
      <img src={icon} style={{borderRadius: '50%'}} width="40px" alt="" />
      <div className="a">
        <Linked style={{fontWeight: 700}} to={`/${subRedditName}/`}>{subRedditName}</Linked>
        <p>{subReddit && subReddit.subscribers}</p>
      </div>
      <JoinBtn>Join</JoinBtn>
    </div>
  );
};

export default TrenSubreddit;

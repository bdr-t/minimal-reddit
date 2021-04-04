import { useEffect, useState } from "react";
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

  

  return (
    <div style={{display:'flex', gap:'1em', padding:'0.5em 1em'}}>
      <img src={icon} style={{borderRadius: '50%'}} width="40px" alt="" />
      <div className="a">
        <p>{subReddit && subReddit.display_name_prefixed}</p>
        <p>{subReddit && subReddit.subscribers}</p>
      </div>
      <p style={{marginLeft: 'auto', borderRadius: '20px', padding:'0.5em 1em', alignSelf:'center', backgroundColor: 'red', cursor:'pointer'}}>Join</p>
    </div>
  );
};

export default TrenSubreddit;

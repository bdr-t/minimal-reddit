import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TrendingContainer, Text, JoinBtn } from "../styledComponents";
import useFetchSubInfo from "../actions/useFetchSubInfo";
import { useState } from "react";
import parseHtml from "../actions/parseHTML";
import suscribe from "../actions/suscribe";

const SubReddit = ({data, error, status}) => {
  const token = useSelector((state) => state.authorization.token);
  const [isSubscriber, setIsSubscriber ]= useState(data.user_is_subscriber)
  const { subReddit } = useParams();


  let content 

  if (status === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (status === "succeeded") {
    let icon = "https://i.imgur.com/Td33Ac4.png";
    if (data.icon) {
      icon = data.icon;
    } else if (data.community_icon) {
      let url = data.community_icon;
      if (url.endsWith("png")) {
        icon = url;
      } else {
        const remove = url.split("?").pop();
        const icona = url.replace(remove, "");
        icon = icona;
      }
    }

    let banner;
    if (data.banner) {
      banner = data.banner;
    } else if (data.banner_background_image) {
      let url = data.banner_background_image;
      if (url.endsWith("png")) {
        icon = url;
      } else {
        const remove = url.split("?").pop();
        const icona = url.replace(remove, "");
        banner = icona;
      }
    }

    function handleClick(){
      if(isSubscriber){
        suscribe('unsub', data.name, token )
        setIsSubscriber(false)
      } else{
        suscribe('sub', data.name, token )
        setIsSubscriber(true)
      }
    }

  
    


    content = (
      <div className="a">
        {banner && <img width="100%" src={banner} alt="" />}
        <div style={{ display: "flex", gap: "0.5em", padding: "1em 1em 0 1em" }}>
          <img width="40" style={{ borderRadius: "50%"}} src={icon} alt="" />
          <div style={{display:'flex', alignItems:'center', gap:'0.5em'}}>
            <h4>{data.name}</h4>
            <JoinBtn onClick={()=>handleClick()} style={{padding:'0.25em 0.5em'}}>{isSubscriber ? 'leave' : 'join'}</JoinBtn>
          </div>
        </div>
        <div className="des">
          <h4 style={{padding: '0.5em 1em'}}>{data.title}</h4>

          <Text>{parseHtml(data.description)}</Text>
        </div>
        <div className="footer" style={{display:'flex', justifyContent:'space-around', paddingBottom:'1em'} }>
          <h4>{data.subscribers} members</h4>
          <h4>{data.accounts_active} online</h4>
        </div>
      </div>
    );
  } else if (status === "error") {
    content = <div>{error}</div>;
  }



  return <TrendingContainer></TrendingContainer>;
};

export default SubReddit;

import { useSelector } from "react-redux";
import { TrendingContainer, Text, JoinBtn, NormalText } from "../styledComponents";
import { useState } from "react";
import parseHtml from "../actions/parseHTML";
import suscribe from "../actions/suscribe";

const SubReddit = ({data, error, status}) => {
  const authorization = useSelector(
    (state) => state.authorization.authorization
  );
  const token = useSelector((state) => state.authorization.token);
  const [isSubscriber, setIsSubscriber ]= useState(data.user_is_subscriber || false)



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
      if(authorization){
        if(isSubscriber){
          suscribe('unsub', data.name, token )
          setIsSubscriber(false)
        } else{
          suscribe('sub', data.name, token )
          setIsSubscriber(true)
        }

      }
      
    }

  
    


    content = (
      <div className="a">
        {banner && <img width="100%" src={banner} alt="" />}
        <div style={{ display: "flex", gap: "0.5em", padding: "1em 1em 0 1em" }}>
          <img width="40" style={{ borderRadius: "50%"}} src={icon} alt="" />
          <div style={{display:'flex', alignItems:'center', gap:'0.5em'}}>
            <NormalText style={{fontWeight: '600'}}>{data.name}</NormalText>
            <JoinBtn onClick={()=>handleClick()} style={{padding:'0.25em 0.5em'}}>{isSubscriber ? 'leave' : 'join'}</JoinBtn>
          </div>
        </div>
        <div className="des">
          <NormalText style={{padding: '0.5em 1em'}}>{data.title}</NormalText>

          <Text>{parseHtml(data.description)}</Text>
        </div>
        <div className="footer" style={{display:'flex', justifyContent:'space-around', paddingBottom:'1em'} }>
          <NormalText>{data.subscribers} members</NormalText>
          <NormalText>{data.accounts_active} online</NormalText>
        </div>
      </div>
    );
  } else if (status === "error") {
    content = <div>{error}</div>;
  }



  return <TrendingContainer>{content}</TrendingContainer>;
};

export default SubReddit;

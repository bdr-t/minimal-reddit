import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, MessageBy, Text, Linked } from "../styledComponents";
import parseHTML from '../actions/parseHTML'

const Notifications = () => {
    const token = useSelector((state) => state.authorization.token);
  const [data, setData] = useState()
  useEffect(() => {
    if (token) {
      async function getData() {
          console.log('algo')
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
        const response = await axios
          .get("https://oauth.reddit.com/message/inbox", config)
          .then((res) => res.data.data.children);
        setData(response)
      }
      getData()
    }
  }, [token]);

  let content = 'loading'
  // <Linked to={`/r/${post.subreddit}/post/${post.id}`}>

  if(data){
    content = data.map(x => {
        if(x.kind === 't1'){
          const postId = x.data.parent_id.slice(3)
            return <Container>
                <MessageBy> <span>{x.data.type === 'post_reply'? 'Post replied' : 'Comment replied'}</span>
                {x.data.link_title}
                </MessageBy>
                <Linked style={{paddingLeft:'15px', fontSize:'13px'}}to={`/u/${x.data.author}`}>by {x.data.author}</Linked>
                <Text>{parseHTML(x.data.body_html)}</Text>
                </Container>
        } 
        return 
    })
}
return (
  <div>
    {content}
  </div>
);
}
 
export default Notifications;
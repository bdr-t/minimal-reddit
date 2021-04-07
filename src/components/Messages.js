import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Text } from "../styledComponents";
import parseHTML from '../actions/parseHTML'
import TimeAgo from './TimeAgo'
const Messages = () => {
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

  if(data){
      content = data.map(x => {
          if(x.kind === 't4'){
              return <Container>
                  <TimeAgo created={x.data.created_utc} author={x.data.author} message={true}/>
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
};

export default Messages;

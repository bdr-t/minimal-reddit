import { useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";
import { Section } from "../styledComponents";
import LogoNav from "./LogoNav";
import {useState, useEffect} from 'react'
import axios from 'axios'

import Sort from "./sort";
import TrendingCommunities from "./TrendingCommunities";
import ThirdPart from "./ThirdPart";

const PostList = ({ match }) => {
  const authorization = useSelector(
    (state) => state.authorization.authorization
  );
  const token = useSelector((state) => state.authorization.token);
    const [userName, setUserName] = useState();
    useEffect(() => {
      if (token) {
        async function getName() {
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          const data = await axios(
            `https://oauth.reddit.com/api/v1/me`,
            config
          ).then((res) => res);
          setUserName(data.data.name);
        }
        getName();
      }
    }, [token]);
  return (
    <Section>
      <LogoNav />
      <div>
        <Sort />
        {authorization && userName && <LoggedIn match={match} username={userName}/>}
        {!authorization && <NotLoggedIn match={match} />}
      </div>

      <ThirdPart />
    </Section>
  );
};

export default PostList;

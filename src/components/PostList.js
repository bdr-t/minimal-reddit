import {useSelector } from "react-redux";
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'
import {Section} from '../styledComponents'
import LogoNav from './LogoNav'





import Sort from "./sort";
import TrendingCommunities from "./TrendingCommunities";
import ThirdPart from "./ThirdPart";


const PostList = ({match}) => {
  

  const authorization = useSelector(state=> state.authorization.authorization)
  return (
    <Section>
      <LogoNav/>
      {/* <Sort/> */}
      {authorization && <LoggedIn match={match}/>}
      {!authorization && <NotLoggedIn match={match}/>}
      <ThirdPart/>
    </Section>
  );
};

export default PostList;

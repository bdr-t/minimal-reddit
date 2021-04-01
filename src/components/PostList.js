import {useSelector } from "react-redux";
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'
import {Section} from '../styledComponents'
import LogoNav from './LogoNav'




import Sort from "./sort";
import TrendingCommunities from "./TrendingCommunities";


const PostList = ({match}) => {
  

  const authorization = useSelector(state=> state.authorization.authorization)
  return (
    <Section>
      <LogoNav/>
      {/* <Sort/> */}
      {authorization && <LoggedIn match={match}/>}
      {!authorization && <NotLoggedIn match={match}/>}

    </Section>
  );
};

export default PostList;

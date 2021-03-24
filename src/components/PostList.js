import {useSelector } from "react-redux";
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'



import Sort from "./sort";


const PostList = ({match}) => {
  let path = match ? match.params.subReddit : '/';
  
  
  const authorization = useSelector(state=> state.authorization.authorization)
  return (
    <section className="posts-list">
      <Sort url={path}/>
      {authorization && <LoggedIn match={match}/>}
      {!authorization && <NotLoggedIn match={match}/>}

    </section>
  );
};

export default PostList;

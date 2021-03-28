import {useSelector } from "react-redux";
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'




import Sort from "./sort";


const PostList = ({match}) => {
  

  const authorization = useSelector(state=> state.authorization.authorization)
  return (
    <section className="posts-list">
      <Sort/>
      {authorization && <LoggedIn match={match}/>}
      {!authorization && <NotLoggedIn match={match}/>}

    </section>
  );
};

export default PostList;

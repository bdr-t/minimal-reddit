import { useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";
import { Section } from "../styledComponents";
import LogoNav from "./LogoNav";

import Sort from "./sort";
import TrendingCommunities from "./TrendingCommunities";
import ThirdPart from "./ThirdPart";

const PostList = ({ match }) => {
  const authorization = useSelector(
    (state) => state.authorization.authorization
  );
  return (
    <Section>
      <LogoNav />
      <div>
        <Sort />
        {authorization && <LoggedIn match={match} />}
        {!authorization && <NotLoggedIn match={match} />}
      </div>

      <ThirdPart />
    </Section>
  );
};

export default PostList;

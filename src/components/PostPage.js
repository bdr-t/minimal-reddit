import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "./Post";
import Comments from "./Comments";
import { Section} from "../styledComponents";
import LogoNav from './LogoNav'

const PostPage = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.authorization.token);

  return (
    <Section>
      <LogoNav />
      <div>
        <Post postId={id} token={token}></Post>
        <Comments postId={id} />
      </div>
    </Section>
  );
};

export default PostPage;

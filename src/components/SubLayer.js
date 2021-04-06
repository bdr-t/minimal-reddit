import SubRedditInfo from "./SubRedditInfo";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetchSubInfo from "../actions/useFetchSubInfo";

const SubLayer = () => {
  const token = useSelector((state) => state.authorization.token);
  const { subReddit } = useParams();
  const { data, error, status } = useFetchSubInfo(
    `https://oauth.reddit.com/r/${subReddit}/about`,
    token
  );
  return (
  <>
  {data && <SubRedditInfo data={data} error={error} status={status} />}
  </>
  );
};

export default SubLayer;

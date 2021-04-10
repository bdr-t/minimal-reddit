import SubRedditInfo from "./SubRedditInfo";
import { useParams } from "react-router-dom";
import useFetchSubInfo from "../actions/useFetchSubInfo";

const SubLayer = () => {

  const { subReddit } = useParams();

  const { data, error, status } = useFetchSubInfo(
    `https://www.reddit.com/r/${subReddit}/about.json`);
  return (
  <>
  {data && <SubRedditInfo data={data} error={error} status={status} />}
  </>
  );
};

export default SubLayer;

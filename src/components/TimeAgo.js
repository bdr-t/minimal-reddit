import { fromUnixTime, formatDistanceToNowStrict } from "date-fns";
import { SubTitle } from "../styledComponents";
import { Link } from "react-router-dom";
const TimeAgo = ({ created, author, needsPadding }) => {
  let timePeriod = 1;

  if (created) {
    const date = fromUnixTime(created);
    timePeriod = formatDistanceToNowStrict(date);
  }


  return (
      <>
    {needsPadding && <SubTitle style={{paddingLeft:'1em', paddingBottom:'8px'}}>
      Posted by <Link to={`u/${author}`}>u/{author}</Link> {timePeriod} ago
    </SubTitle>}
    {!needsPadding && <SubTitle>
      Posted by <Link to={`u/${author}`}>u/{author}</Link> {timePeriod} ago
    </SubTitle>}

    </>
  );
};

export default TimeAgo;

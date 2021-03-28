import { fromUnixTime, formatDistanceToNowStrict } from "date-fns";
import { SubTitle } from "../styledComponents";
import {Linked} from "../styledComponents"
const TimeAgo = ({ created, author, needsPadding }) => {
  let timePeriod = 1;

  if (created) {
    const date = fromUnixTime(created);
    timePeriod = formatDistanceToNowStrict(date);
  }


  return (
      <>
    {needsPadding && <SubTitle style={{paddingLeft:'1em', paddingBottom:'8px'}}>
      Posted by <Linked to={`u/${author}`}>u/{author}</Linked> {timePeriod} ago
    </SubTitle>}
    {!needsPadding && <SubTitle>
      Posted by <Linked to={`u/${author}`}>u/{author}</Linked> {timePeriod} ago
    </SubTitle>}

    </>
  );
};

export default TimeAgo;

import { fromUnixTime, formatDistanceToNowStrict } from "date-fns";
import { SubTitle, MessageBy} from "../styledComponents";
import {Linked} from "../styledComponents"
const TimeAgo = ({ created, author, needsPadding, message }) => {
  let timePeriod = 1;

  if (created) {
    const date = fromUnixTime(created);
    timePeriod = formatDistanceToNowStrict(date);
  }


  return (
      <>
    {!message && needsPadding && <SubTitle style={{paddingLeft:'0.5em', paddingBottom:'8px'}}>
      Posted by <Linked to={`/u/${author}`}>u/{author}</Linked> {timePeriod} ago
    </SubTitle>}
    {!message && !needsPadding && <SubTitle>
      Posted by <Linked to={`/u/${author}`}>u/{author}</Linked> {timePeriod} ago
    </SubTitle>}
    {message && <MessageBy>
      Message by <Linked to={`/u/${author}`}>u/{author}</Linked> {timePeriod} ago
    </MessageBy>}

    </>
  );
};

export default TimeAgo;

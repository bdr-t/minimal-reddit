import axios from "axios";
import { useState, useEffect } from "react";
import TrenSubreddit from "./TrenSubreddit";
import { TrendingContainer, TrendingH3 } from "../styledComponents";

const TrendingCommunities = () => {
  const [subreddits, setSubreddits] = useState();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    setSubreddits(["reddit.com","react", 'computerscience', 'webdev', 'chess',]);
    setStatus("succeded");
  }, []);

  let content = "loading";

  if (status === "succeded") {
    content = subreddits.map((x) => <TrenSubreddit name={x} />);
  }

  return (
    <TrendingContainer>
      <TrendingH3>Trending Communities</TrendingH3>
      {content}
    </TrendingContainer>
  );
};

export default TrendingCommunities;

import { useEffect, useState } from "react";
import axios from "axios";

function useFetchPosts(link) {
  const [posts, setPosts] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(link).then((response) => response.data.data.children);
      console.log(response);
      let list = [];
      for (let x in response) {
        let post = {
          id: response[x].data.id,
          author: response[x].data.author_fullname,
          is_video: response[x].data.is_video,
          media: response[x].data.media,
          post_id: response[x].data.name,
          over_18: response[x].data.over_18,
          link: response[x].data.permalink,
          selftext: response[x].data.selftext,
          subreddit: response[x].data.subreddit,
          subreddit_id: response[x].data.subreddit_id,
          thumbnail: response[x].data.thumbnail,
          title: response[x].data.title,
          ups: response[x].data.ups,
          url: response[x].data.url,
          is_gallery: response[x].data.is_gallery,
        };
        list.push(post)
      }
      setPosts(list);
      setStatus("succeeded");
      setError(false);
    };
    fetchData()
  }, []);

  
  return { posts, status, error };
}

export default useFetchPosts;

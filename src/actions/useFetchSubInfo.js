import { useEffect, useState } from "react";
import axios from "axios";

function useFetchSubInfo(link, token) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let config
      if(token){
        config = {
          headers: { Authorization: `Bearer ${token}` },
        };

      }
      
      const response = await axios
        .get(link, config)
        .then((response) => response.data.data);
      let list = {
        icon: response.icon_img,
        accounts_active: response.accounts_active,
        banner: response.banner_img,
        description: response.public_description_html,
        subscribers: response.subscribers,
        title: response.title,
        user_is_subscriber: response.user_is_subscriber,
        community_icon: response.community_icon,
        banner_background_image: response.banner_background_image,
        name: response.display_name_prefixed,
      };

      setData(list);
      setStatus("succeeded");
      setError(false);
    };
    fetchData();
  }, []);

  return { data, status, error };
}

export default useFetchSubInfo;

const savePost = async(fullname, token) => {
    const response = await fetch(
      `https://oauth.reddit.com/api/save?id=${fullname}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      }
    )
  };

export default savePost;
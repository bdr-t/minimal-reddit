const savePost = async(fullname, token) => {
    console.log('saved')
    const response = await fetch(
      `https://oauth.reddit.com/api/unsave?id=${fullname}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      }
    ).then(response => console.log(response))
  };

export default savePost;
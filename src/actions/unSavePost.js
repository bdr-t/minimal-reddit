const savePost = async(fullname, token) => {

    await fetch(
      `https://oauth.reddit.com/api/unsave?id=${fullname}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      }
    ).then(response => console.log(response))
    .catch(err => console.log(err))
  };

export default savePost;
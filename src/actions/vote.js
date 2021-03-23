const vote = async(dir, fullname, token) => {
    console.log(dir)
    const response = await fetch(
      `https://oauth.reddit.com/api/vote?dir=${dir}&id=${fullname}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      }
    ).then(response => console.log(response))
  };

export default vote;
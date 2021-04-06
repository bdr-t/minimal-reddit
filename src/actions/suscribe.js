const suscribe = async(action, sub, token) => {

    await fetch(
      `https://oauth.reddit.com/api/subscribe?action=${action}&sr_name=${sub}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      }
    ).then(response => console.log(response))
    .catch(err => console.log(err))
  };

export default suscribe;
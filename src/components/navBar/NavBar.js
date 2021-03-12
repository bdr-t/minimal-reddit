const NavBar = () => {
const TYPE = "code";
const RANDOM_STRING = "hdiudou9083jkdsa";
const URI = "http://localhost:3000/callback/";
const DURATION = "permanent";
const SCOPE_STRING = "identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread";
const url = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`;
    return ( 
        <div className="home-nav">
          <a className="logo" href="/">
            MinimalReddit
          </a>
          <textarea className="searcher" name="search" id="search" placeholder="search"></textarea>
          <button className="login"><a href={url}>Login</a></button>
        </div>
    );
}
 
export default NavBar;

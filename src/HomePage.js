import save from "./images/save.svg";
import world from "./images/world.svg";
import upvote from "./images/upvote.svg";
import downvote from "./images/downvote.svg";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="flex">
      <div className="container-home">
        <div className="home-nav">
          <a className="logo" href="/">
            MinimalReddit
          </a>
          <textarea className="searcher" name="search" id="search" placeholder="search"></textarea>
          <button className="login">Login</button>
        </div>

        <div className="content-container">
          <h2 className="content-title">Why so few Sunrise + 10000 Lux?<img className="save-icon icon" src={save} alt="" /></h2>
    
          <p className="content-body">
            I feel like it would be really convenient to have your wake-up light
            be the same as a SAD lamp, with really bright light. The Philips
            isn't particularly bright at 300 lux. The SAD lamps are close to
            10000 lux. Any reason you don't want a sunrise SAD lamp, where it
            gradually comes up to VERY BRIGHT?
          </p>

          <div className="content-footer">
            <div className="upvotes">
              <img className="icon" src={upvote} alt="" />
              <p>2000</p>
              <img className="icon" src={downvote} alt="" />
            </div>
            <div className="subreddit">
              <p className='subreddit-text'>r/GetOutOfBed</p>
              <img className="icon-world icon" src={world} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;

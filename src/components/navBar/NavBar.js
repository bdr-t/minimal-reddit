import '../homePage/HomePage.css'
const NavBar = () => {
    return ( 
        <div className="home-nav">
          <a className="logo" href="/">
            MinimalReddit
          </a>
          <textarea className="searcher" name="search" id="search" placeholder="search"></textarea>
          <button className="login">Login</button>
        </div>
    );
}
 
export default NavBar;

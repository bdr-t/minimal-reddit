import "./HomePage.css";
import NavBar from "./NavBar";
import PostList from "./PostList";


const HomePage = () => {
  

  return (
    <div className="flex">
      <div className="container-home">
        <NavBar />
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;

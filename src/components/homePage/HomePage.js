import "./HomePage.css";
import PostList from "./PostList";


const HomePage = () => {
  

  return (
    <div className="flex">
      <div className="container-home">
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;

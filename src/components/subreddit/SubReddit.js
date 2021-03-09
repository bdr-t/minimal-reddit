import "../homePage/HomePage.css";

const SubReddit = ({ match }) => {
  const { subReddit } = match.params;
  console.log(match);
  return (
    <div className="flex">
      <div className="container-home">
        <h1>subReddit</h1>
      </div>
    </div>
  );
};

export default SubReddit;

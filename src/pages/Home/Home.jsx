import "./Home.scss";
import Latest from "../../components/Latest/Latest";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  return (
    <div className="home">
      <Latest />
      <Posts />
    </div>
  );
};

export default Home;

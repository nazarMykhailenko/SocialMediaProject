// components
import Topbar from "../../components/Topbar";
import Sitebar from "../../components/Sitebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
// styles
import "./Home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sitebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;

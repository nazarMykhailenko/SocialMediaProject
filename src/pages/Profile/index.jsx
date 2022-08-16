// components
import Topbar from "../../components/Topbar";
import Sitebar from "../../components/Sitebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
// styles
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sitebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt="profileCoverImg"
              />
              <img
                className="profileUserImg"
                src="assets/person/1.jpeg"
                alt="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Nazar</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

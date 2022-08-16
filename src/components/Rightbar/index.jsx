// data
import { Users } from "../../data.js";
// styles
import "./Rightbar.css";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="giftImg" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="ad" className="rightbarAD" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((user) => (
            <li key={user.id} className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src={user.profilePicture}
                  alt="rightbarProfileImg"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUserName">{user.username}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitleProfile">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">London</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kyiv</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Reletionship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitleProfile">User Followings</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="rightbarFollowingImg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFolloringName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="rightbarFollowingImg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFolloringName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="rightbarFollowingImg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFolloringName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="rightbarFollowingImg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFolloringName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="rightbarFollowingImg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFolloringName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt="rightbarFollowingImg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFolloringName">Jhon Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;

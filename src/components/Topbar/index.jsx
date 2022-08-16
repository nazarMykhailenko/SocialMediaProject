// styles
import "./Topbar.css";
// icons
import {
  Person as PersonIcon,
  Search as SearchIcon,
  Chat as ChatIcon,
  CircleNotifications as CircleNotificationsIcon,
} from "@mui/icons-material";
// libs
import { useNavigate, Link } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  // handlers
  const onClickProfileImg = () => {
    navigate(`/profile`);
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search for friends,post or video"
            type="text"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink">
            Homepage
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIcon">
            <PersonIcon />
            <span className="topbarIconCounter">0</span>
          </div>
          <div className="topbarIcon">
            <ChatIcon />
            <span className="topbarIconCounter">0</span>
          </div>
          <div className="topbarIcon">
            <CircleNotificationsIcon />
            <span className="topbarIconCounter">0</span>
          </div>
        </div>
        <img
          onClick={onClickProfileImg}
          src="/assets/person/1.jpeg"
          alt="profileImg"
          className="topbarImg"
        />
      </div>
    </div>
  );
}

export default Topbar;

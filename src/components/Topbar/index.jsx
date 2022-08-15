// styles
import "./Topbar.css";
// icons
import {
  Person as PersonIcon,
  Search as SearchIcon,
  Chat as ChatIcon,
  CircleNotifications as CircleNotificationsIcon,
} from "@mui/icons-material";

function Topbar() {
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
          <span className="topbarLink">Homepage</span>
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
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;

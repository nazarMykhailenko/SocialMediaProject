// data
import { Users } from "../../data.js";
// icons
import {
  RssFeed as FeedIcon,
  Group as GroupIcon,
  Chat as ChatIcon,
  PlayCircleFilledOutlined as VideoIcon,
  Bookmark as BookmarkIcon,
  HelpOutlineOutlined as HelpIcon,
  WorkOutlineOutlined as WorkIcon,
  Event as EventIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
// styles
import "./Sitebar.css";

const Sitebar = () => {
  return (
    <div className="sitebar">
      <div className="sitebarWrapper">
        <ul className="sitebarList">
          <li className="sitebarItem">
            <FeedIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Feed</span>
          </li>
          <li className="sitebarItem">
            <ChatIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Chat</span>
          </li>
          <li className="sitebarItem">
            <VideoIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Videos</span>
          </li>
          <li className="sitebarItem">
            <GroupIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Group</span>
          </li>
          <li className="sitebarItem">
            <BookmarkIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Bookmarks</span>
          </li>
          <li className="sitebarItem">
            <HelpIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Questions</span>
          </li>
          <li className="sitebarItem">
            <WorkIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Jobs</span>
          </li>
          <li className="sitebarItem">
            <EventIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Events</span>
          </li>
          <li className="sitebarItem">
            <SchoolIcon className="sitebarIcon" />
            <span className="sitebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sitebarButton">Show More</button>
        <hr className="sitebarHR" />
        <ul className="sitebarFriendList">
          {Users.map((user) => (
            <li key={user.id} className="sitebarFriend">
              <img
                src={user.profilePicture}
                alt="friendImg"
                className="sitebarFriendImage"
              />
              <span className="sitebarFriendName">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sitebar;

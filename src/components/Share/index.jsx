// icons
import {
  PermMedia as PermMediaIcon,
  Label as LabelIcon,
  Room as RoomIcon,
  EmojiEmotions as EmojiEmotionsIcon,
} from "@mui/icons-material";
// styles
import "./Share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />

          <input
            type="text"
            className="shareInput"
            placeholder="What`s in your mind Nazar?"
          />
        </div>
        <hr className="shareHR" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="gold" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;

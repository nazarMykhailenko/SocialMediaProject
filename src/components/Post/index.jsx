// hooks
import { useState } from "react";
// icons
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
// data
import { Users } from "../../data.js";
// styles
import "./Post.css";

const Post = ({ userId, desc, photo, date, like, comment }) => {
  let [likeCount, setLikeCount] = useState(like);
  let [likeStatus, setLikeStatus] = useState(false);

  // handle
  const onClickLike = () => {
    if (!likeStatus) {
      setLikeCount((likeCount += 1));
    } else {
      setLikeCount((likeCount -= 1));
    }
    setLikeStatus(!likeStatus);
  };

  const currentUser = Users.filter((user) => user.id === userId)[0];

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={currentUser.profilePicture}
              alt="postProfileImg"
              className="postProfileImg"
            />
            <span className="postUserName">{currentUser.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          {desc ? <span className="postText">{desc}</span> : ``}
          <img src={photo} alt="postImg" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={onClickLike}
              className="likeIcon"
              src="/assets/like.png"
              alt="like"
            />
            <img
              onClick={onClickLike}
              className="likeIcon"
              src="/assets/heart.png"
              alt="heart"
            />
            <span className="likeCounter">{likeCount} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

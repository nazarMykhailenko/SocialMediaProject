// styles
import "./Post.css";
// icons
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt="postProfileImg"
              className="postProfileImg"
            />
            <span className="postUserName">Nazar Mikhailenko</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It is my first post</span>
          <img src="/assets/post/1.jpeg" alt="postImg" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="like" />
            <img className="likeIcon" src="/assets/heart.png" alt="heart" />
            <span className="likeCounter">0 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

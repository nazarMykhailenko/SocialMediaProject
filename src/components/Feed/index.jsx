// components
import Share from "../Share";
import Post from "../Post";
// data
import { Posts } from "../../data.js";
// styles
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

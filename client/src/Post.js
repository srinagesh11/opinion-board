import "./post.css";
import { useState } from "react";
import Comment from "./Comment";

export default function Post({ post }) {
  const [show_cmnts, set_cmnts] = useState(false);

  const show_table = () => {
    set_cmnts(!show_cmnts);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <div className="postTop">
            <div className="postTopLeft">
              <span className="postUsername">{post.username}</span>
              <span className="postDate">{post.dateTime}</span>
            </div>
          </div>
          <br></br>
          <span className="postText">{post?.opinionDes}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomRight">
            <span className="postCommentText" onClick={show_table}>
              {post.userComments.length} comments
            </span>
          </div>
        </div>
        <br></br>
        {show_cmnts ? <Comment post={post} po={post.id}></Comment> : null}
      </div>
    </div>
  );
}

import { Posts } from "../../dummyData";
import { MoreVert } from "@material-ui/icons";
export default function post_handler(username, date, desc, like, comment) {
  <div className="postWrapper">
    <div className="postTop">
      <div className="postTopLeft">
        <span className="postUsername">{username}</span>
        <span className="postDate">{date}</span>
      </div>
      <div className="postTopRight">
        <MoreVert />
      </div>
    </div>
    <div className="postCenter">
      <span className="postText">{desc}</span>
    </div>
    <div className="postBottom">
      <div className="postBottomLeft">
        {/* <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
          <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />*/}
        <span className="postLikeCounter">{like} people like it</span>
      </div>
      <div className="postBottomRight">
        <span className="postCommentText">{comment} comments</span>
      </div>
    </div>
  </div>;
}
let newRow = document.createElement("posts_1");
let el = Object.keys(Posts.id);
console.log(el);
el.forEach((i) => {
  console.log(
    Posts.id[i].username,
    Posts.id[i].date,
    Posts.id[i].desc,
    Posts.id[i].like,
    Posts.id[i].comment
  );
  newRow.innerHTML = post_handler(
    Posts.id[i].username,
    Posts.id[i].date,
    Posts.id[i].desc,
    Posts.id[i].like,
    Posts.id[i].comment
  );
  document.getElementById("posts_1").appendChild(newRow);
});

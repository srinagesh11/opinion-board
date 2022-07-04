import "./comment.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React, { useState } from "react";
import Feed from "./Feed";
const fs = require("fs");
export default function Comment(post, po) {
  let [comment, setComment] = useState("");

  const onCommentChange = (opinion) => {
    setComment(opinion);
  };

  const comment_update = () => {
    const root = document.getElementById("user_new_cmnt").value;

    // Posts[post.po - 1].comment.push([1, root]);
    // console.log(Posts[post.po - 1].comment);

    // Call addComments endpoint here;
    var today = new Date();
    const uname = localStorage.getItem("currentUser");
    fetch("http://localhost:8080/api/comments/addComments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: uname,
        opinion: { oid: post.post.oid },
        dateTime: today,
        commentDes: comment,
      }),
    }).then(() => {
      window.location.reload(true);
    });
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" /> */}
          <input
            placeholder="What's your take on this ?"
            className="shareInput"
            value={comment}
            onInput={(e) => onCommentChange(e.target.value)}
            type="text"
            id="user_new_cmnt"
          />
          <div className="shareBottom">
            <div className="shareOptions"></div>
            <button className="shareButton" onClick={comment_update}>
              Post
            </button>
          </div>
        </div>
        <br></br>

        <tr>
          {post.post.userComments.map((p) => (
            <div>
              <span className="postUsername">{p.userName}</span>:
              <span className="shareInput" id="user_new_post">
                {p.commentDes}
              </span>
            </div>
          ))}
        </tr>
      </div>
    </div>
  );
}

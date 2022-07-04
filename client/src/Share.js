import "./share.css";
import ToggleSwitch from "./toggle";
import { Navigate, Link, Redirect, Route } from "react-router-dom";
import React, { useState } from "react";

const Share = () => {
  let [isPublic, setIsPublic] = useState(false);
  const [opinions, setOpinion] = useState("");

  const onIsPublicChange = (checked) => {
    setIsPublic(checked);
  };

  const sharePost = () => {
    const opiDes = document.getElementById("opiniondes").value;
    setOpinion(opiDes);

    var today = new Date();
    const userName = localStorage.getItem("currentUser");
    console.log("share");

    (async () => {
      const rawResponse = await fetch(
        "http://localhost:8080/api/opinion/addopinion",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName.toString(),
            opinionDes: opiDes.toString(),
            dateTime: today,
            isPublic: isPublic,
          }),
        }
      );

      if (rawResponse.status === 200) {
        window.location.reload(true);
        return <Navigate to="/profile" />;
      } else {
        console.log("Post unsuccessful");
      }
    })();
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input
            name="opinions"
            type="text"
            placeholder="What's on your mind?"
            className="shareInput"
            id="opiniondes"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <ToggleSwitch
                id="isPublic"
                checked={isPublic}
                onChange={onIsPublicChange}
              />
              <span className="shareOptionText"> Private Opinion </span>
            </div>
          </div>
          <button className="shareButton" type="submit" onClick={sharePost}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;

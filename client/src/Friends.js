import Topbar from "./Topbar";
import "./setting.css";
import React, { useState, useEffect } from "react";

export default function Friends() {
  let [content, setContent] = useState([]);
  let [len, setLen] = useState(0);
  const username = localStorage.getItem("currentUser");

  useEffect(() => {
    fetch("http://localhost:8080/api/friends/friendslist/" + username, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
        setLen(data.length);
        console.log("Success:", data);
        console.log(content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <Topbar />
      <br></br>
      <br></br>
      <div className="marginLeft10">
        <h1>Friends</h1>
        <br></br>
        <div className="share">
          <div className="shareWrapper">
            <tr>
              {content.map((p) => (
                <div>
                  <span className="postUsername">{p}</span>
                </div>
              ))}
            </tr>
          </div>
        </div>

        {/* <div>
          <div>
            <div className="postWrapper">
              <div className="postCenter">
                <div className="postTop">
                  <div className="postTopLeft">
                    <span className="postUsername">
                      <div>
                        {content.map((name) => (
                          <span>
                            {name}
                            <br></br>
                          </span>
                        ))}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

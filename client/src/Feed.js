import Post from "./Post";
import Share from "./Share";
import "./feed.css";
import React, { useState, useEffect } from "react";

export default function Feed() {
  console.log("In feed.jsx");
  let [content, setContent] = useState([]);

  useEffect(() => {
    console.log("Testing");
    fetch("http://localhost:8080/api/opinion/findall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
        console.log("Success:", data);
        console.log(content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {console.log(content)}
        <Share />
        {content.map((p) => (
          <Post key={p.oid} post={p} />
        ))}
      </div>
    </div>
  );
}

import Topbar from "./Topbar";
import "./setting.css";
import { Link, Navigate, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Post from "./Post";

export default function SettingPage() {
  const [userDetails, setUserDetails] = useState("");
  let [content, setContent] = useState([]);
  const username = localStorage.getItem("currentUser");
  useEffect(() => {
    //console.log(API);
    console.log("Testing");
    fetch("http://localhost:8080/api/person/myprofile/" + username, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUserDetails(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/opinion/findall/" + username, {
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
    <>
      <Topbar />
      <br></br>
      <div className="marginLeft10">
        <h1>My Profile</h1>
        <br></br>
        <br></br>
        <div>
          <strong>Name: </strong>
          {userDetails.name}
        </div>
        <br></br>
        <div>
          <strong>Username: </strong>
          {userDetails.userName}
        </div>
        <br></br>
        <div>
          <strong>Email: </strong>
          {userDetails.emailid}
        </div>
        <br></br>
        <div>
          <strong>Date of Birth: </strong>
          {userDetails.dob}
        </div>
        <br></br>
        <div>
          <strong> My Posts: </strong>
        </div>
        <div>
          {content.map((p) => (
            <Post key={p.oid} post={p} />
          ))}
        </div>
      </div>
    </>
  );
}

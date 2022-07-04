import React, { Component } from "react";
import { Navigate, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import "./SignUpComponent.css";

const SignUpComponent = () => {
  const [adduser, setAddUser] = useState(false);
  const [userpresent, setUserPresent] = useState(false);

  const signUpClicked = () => {
    const userName = document.getElementById("usrname").value;
    const name = document.getElementById("name").value;
    const pwd = document.getElementById("pwd").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("emailid").value;

    (async () => {
      const rawResponse = await fetch(
        "http://localhost:8080/api/person/addUser",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: userName,
            name: name,
            password: pwd,
            emailid: email,
            dob: dob,
            isPublic: false,
          }),
        }
      );
      console.log(rawResponse);
      if (rawResponse.status === 201) {
        setAddUser(true);
      } else {
        setUserPresent(true);
      }
    })();
  };

  if (adduser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Your Opinion Matters</h3>
          <span className="loginDesc">
            Share and comment about opinions on topics that matter to you.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="loginInput"
            />
            <input
              type="text"
              name="username"
              id="usrname"
              placeholder="User Name"
              className="loginInput"
            />
            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="Enter your DOB"
              className="loginInput"
              required
            />
            <input
              type="email"
              name="email"
              id="emailid"
              placeholder="Email Id"
              required
              className="loginInput"
            />
            <input
              input
              type="password"
              name="password"
              id="pwd"
              placeholder="Create your password"
              className="loginInput"
              required
            />
            <button onClick={signUpClicked} className="loginButton">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;

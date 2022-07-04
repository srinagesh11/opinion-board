import "./topbar.css";
import { Link, Navigate, Redirect } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import Feed from "./Feed";

export default function Topbar() {
  const onLogOut = () => {
    localStorage.removeItem("currentUser");
  };
  const onSetting = () => {
    <Navigate to="/setting" />;
  };

  const onFriends = () => {
    <Navigate to="/friends" />;
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/profile">
          <h1 className="logo">Your Opinion Matters</h1>
        </Link>
      </div>
      <div className="topbarRight">
        <div>
          <Link to="/friends">
            <span className="leftFont" onClicked={onFriends}>
              Friends
            </span>
          </Link>
        </div>
        <div>
          <Link to="/setting">
            <span className="leftFont" onClicked={onSetting}>
              My Profile
            </span>
          </Link>
        </div>
        <div>
          <Link to="/">
            <span className="leftFont" onClicked={onLogOut}>
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

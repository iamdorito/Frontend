import "./leftBar.scss";
import nfticon from "../../assets/unrevealed-nft-2.jpg";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Leftbar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogout = () => {
    setCurrentUser(null);
    fetch("http://localhost:3000/logout", { method: "DELETE" });
  };
  return (
    <div className="leftside">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={nfticon} alt="" />
            <span>{currentUser.username}</span>
          </div>
          <div className="item">
            <Link to="/" style={{ color: "white" }}>
              <GridViewOutlinedIcon />
            </Link>
            <span>Timeline</span>
          </div>
          <div className="item">
            <Link to="/profile/:id" style={{ color: "white" }}>
              <Person2OutlinedIcon />
            </Link>
            <span>Profile</span>
          </div>
          <div className="item">
            <InfoOutlinedIcon />
            <span>Help & Support</span>
          </div>
          <div className="item">
            <Link to="/login" style={{ color: "white" }}>
              <ExitToAppOutlinedIcon />
            </Link>
            <span onClick={handleLogout}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;

import "./navbar.scss";
import defaultUser from "../../assets/default-user.png";
import { Link } from "react-router-dom";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>FlatSocial</span>
        </Link>
        {/* <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div> */}
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={defaultUser} alt="" />
          <span>Dwayne</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

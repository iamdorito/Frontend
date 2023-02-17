import defaultUser from "../../assets/default-user.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);

  const toggleButton = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    fetch("http://localhost:3000/logout", { method: "DELETE" });
  };

  return (
    <NavBarDiv>
      <LeftBar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>FlatSocial</span>
        </Link>
      </LeftBar>
      <RightBar>
        <PersonOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <UserDiv>
          <img src={defaultUser} alt="" onClick={toggleButton} />
          <span>{currentUser.username}</span>
        </UserDiv>
        {showPopup && (
          <Popup>
            <Button onClick={handleLogout}>Logout</Button>
          </Popup>
        )}
      </RightBar>
    </NavBarDiv>
  );
};

export default Navbar;

const NavBarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 50px;
  background: linear-gradient(326.9deg, #13132b 5.79%, #3c9ed2 283.21%);
  position: sticky;
  top: 0;
  z-index: 999;
`;

const LeftBar = styled.div`
  display: flex;
  align-items: center;

  span {
    padding-right: 10px;
    font-weight: bold;
    font-size: 20px;
    color: white;
  }
`;

const RightBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  background: linear-gradient(326.9deg, #393984 5.79%, #135e87 283.21%);
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
`;
